import fs from "fs-extra";
import path from "node:path";
import mime from "mime-types";

export async function setPageHeader(header = {}, defaultImage) {
  const heroImage = await checkFileExistsBeforeUpload([
    header.shareImage // ?? defaultImage,
  ]);

  return {
    ...header,
    // heroImage,
  };
}

export async function setPageSeo(seo = {}, defaultImage) {
  const shareImage = await checkFileExistsBeforeUpload([
    seo.shareImage // ?? defaultImage,
  ]);

  return {
    ...seo,
    // shareImage,
  };
}

export function getFileSizeInBytes(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  return fs.statSync(filePath).size;
}

export function getFileData(fileName) {
  const filePath = path.join("data", "uploads", fileName);

  const size = getFileSizeInBytes(filePath);

  return {
    filepath: filePath,
    originalFileName: fileName,
    size,
    mimetype: mime.lookup(fileName) || "application/octet-stream",
  };
}

export async function uploadFile(file, name) {
  try {
    return await strapi
      .plugin("upload")
      .service("upload")
      .upload({
        files: file,
        data: {
          fileInfo: {
            alternativeText: `An image uploaded to Strapi called ${name}`,
            caption: name,
            name,
          },
        },
      });
  } catch (error) {
    console.error(`Failed to upload file "${name}"`, error);
    throw error;
  }
}

export async function createEntry({ model, entry }) {
  try {
    return await strapi.documents(`api::${model}.${model}`).create({
      data: entry,
    });
  } catch (error) {
    console.error(`Failed creating entry for ${model}`, error);
    throw error;
  }
}

export async function checkFileExistsBeforeUpload(files = []) {
  const existingFiles = [];
  const uploadedFiles = [];

  for (const fileName of files.filter(Boolean)) {
    const baseName = path.parse(fileName).name;

    const existingFile = await strapi
      .query("plugin::upload.file")
      .findOne({
        where: {
          name: baseName,
        },
      });

    if (existingFile) {
      existingFiles.push(existingFile);
      continue;
    }

    const fileData = getFileData(fileName);

    const [uploadedFile] = await uploadFile(
      fileData,
      baseName,
    );

    uploadedFiles.push(uploadedFile);
  }

  const allFiles = [...existingFiles, ...uploadedFiles];

  return allFiles.length === 1
    ? allFiles[0]
    : allFiles;
}

export async function updateBlocks(blocks = []) {
  const updatedBlocks = [];

  for (const block of blocks) {
    switch (block.__component) {
      case "shared.media": {
        const uploadedFile =
          await checkFileExistsBeforeUpload([block.file]);

        updatedBlocks.push({
          ...block,
          file: uploadedFile,
        });

        break;
      }

      case "shared.slider": {
        const uploadedFiles =
          await checkFileExistsBeforeUpload(
            Array.isArray(block.files)
              ? block.files
              : [],
          );

        updatedBlocks.push({
          ...block,
          files: uploadedFiles,
        });

        break;
      }

      default:
        updatedBlocks.push(block);
    }
  }

  return updatedBlocks;
}