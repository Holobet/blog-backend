"use strict";

/**
 * quiz controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::quiz.quiz", ({ strapi }) => ({
  async handleLike(ctx) {
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne(
      "api::quiz.quiz",
      ctx.params.id,
      {
        populate: { someRelation: true },
      }
    );
    const totalLikes = preEntry.likes !== null ? preEntry.likes + 1 : 1;
    const entry = await strapi.entityService.update(
      "api::quiz.quiz",
      preEntry.id,
      {
        data: {
          likes: totalLikes,
        },
      }
    );
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  },

  async handleDisike(ctx) {
    // @ts-ignore
    // const { results, pagination } = await strapi.service('api::quiz.quiz').find(sanitizedQueryParams);
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne(
      "api::quiz.quiz",
      ctx.params.id,
      {
        populate: { someRelation: true },
      }
    );
    const totalLikes = preEntry.likes !== null ? preEntry.likes - 1 : 0;
    const entry = await strapi.entityService.update(
      "api::quiz.quiz",
      preEntry.id,
      {
        data: {
          likes: totalLikes,
        },
      }
    );
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  },
  async handleUpdateView(ctx) {
    // @ts-ignore
    // const { results, pagination } = await strapi.service('api::quiz.quiz').find(sanitizedQueryParams);
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne(
      "api::quiz.quiz",
      ctx.params.id,
      {
        populate: { someRelation: true },
      }
    );
    const totalViews = preEntry.views !== null ? preEntry.views + 1 : 0;
    const entry = await strapi.entityService.update(
      "api::quiz.quiz",
      preEntry.id,
      {
        data: {
          views: totalViews,
        },
      }
    );
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  },
}));
