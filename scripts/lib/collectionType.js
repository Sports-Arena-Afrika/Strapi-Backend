"use strict";

import {
  updateBlocks,
  createEntry,
  checkFileExistsBeforeUpload,
} from "./utils.js";

const {
  categories,
  authors,
  articles,
} = require("../../data/seed/collection.json");

export async function importCategories() {
  for (const category of categories) {
    await createEntry({ model: "category", entry: category });
  }
}

export async function importAuthors() {
  for (const author of authors) {
    const avatar = await checkFileExistsBeforeUpload([author.avatar]);

    await createEntry({
      model: "author",
      entry: {
        ...author,
        avatar,
      },
    });
  }
}

export async function importArticles() {
  for (const article of articles) {
    const cover = await checkFileExistsBeforeUpload([`${article.slug}.jpg`]);
    const updatedBlocks = await updateBlocks(article.blocks);

    await createEntry({
      model: "article",
      entry: {
        ...article,
        cover,
        blocks: updatedBlocks,
        // Make sure it's not a draft
        publishedAt: Date.now(),
      },
    });
  }
}
