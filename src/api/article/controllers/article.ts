/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article');

// src/api/article/controllers/article.js
const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article', ({ strapi }) => ({
//   async findOne(ctx) {
//     // 1. Grab your custom UID/slug value from the request URL parameters
//     const { id: slugValue } = ctx.params;

//     // 2. Query the database matching your custom field (e.g., 'slug')
//     const entity = await strapi.documents('api::article.article').findMany({
//       filters: { slug: slugValue },
//       ...ctx.query // forwards population and selection states
//     });

//     // 3. Extract the single entry or handle a 404 error
//     const singleEntity = entity[0];
//     if (!singleEntity) {
//       return ctx.notFound('Entry not found');
//     }

//     // 4. Sanitize and transform the response to keep REST structure intact
//     const sanitizedEntity = await this.sanitizeOutput(singleEntity, ctx);
//     return this.transformResponse(sanitizedEntity);
//   }
// }));

