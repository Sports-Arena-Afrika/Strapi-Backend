"use strict";

import {
  setPageHeader,
  setPageSeo,
  updateBlocks,
  createEntry,
  checkFileExistsBeforeUpload,
} from "./utils.js";

import singleData from "../../data/seed/single.json" with { type: "json" };

const { global, blog, event, about, contact } = singleData;

export async function importGlobal() {
  const defaultSeo = await setPageSeo(global.defaultSeo, "default-image.png");
  const favicon = await checkFileExistsBeforeUpload([
    global.favicon ?? "favicon.png",
  ]);

  return createEntry({
    model: "global",
    entry: {
      ...global,
      favicon,
      defaultSeo,
      // Make sure it's not a draft
      publishedAt: Date.now(),
    },
  });
}

export async function importBlog() {
  const header = await setPageHeader(blog.header);
  const seo = await setPageSeo(blog.seo, "hero-image.png");

  await createEntry({
    model: "blog",
    entry: {
      ...blog,
      seo,
      header,
      // Make sure it's not a draft
      publishedAt: Date.now(),
    },
  });
}

export async function importEvent() {
  const header = await setPageHeader(event.header);
  const seo = await setPageSeo(event.seo, "hero-image.png");

  await createEntry({
    model: "event",
    entry: {
      ...event,
      seo,
      header,
      // Make sure it's not a draft
      publishedAt: Date.now(),
    },
  });
}

export async function importAbout() {
  const updatedBlocks = await updateBlocks(about.blocks);
  const header = await setPageHeader(about.header);
  const seo = await setPageSeo(about.seo, "hero-image.png");

  await createEntry({
    model: "about",
    entry: {
      ...about,
      seo,
      header,
      blocks: updatedBlocks,
      // Make sure it's not a draft
      publishedAt: Date.now(),
    },
  });
}

export async function importContact() {
  const updatedBlocks = await updateBlocks(contact.blocks);
  const header = await setPageHeader(contact.header);
  const seo = await setPageSeo(contact.seo, "hero-image.png");

  await createEntry({
    model: "contact",
    entry: {
      ...contact,
      seo,
      header,
      blocks: updatedBlocks,
      // Make sure it's not a draft
      publishedAt: Date.now(),
    },
  });
}
