'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
  async handleLike(ctx) {
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne('api::article.article', ctx.params.id, {
      populate: { someRelation: true },
    });
    const totalLikes = preEntry.likes !== null?preEntry.likes+1:1
    const entry = await strapi.entityService.update('api::article.article', preEntry.id, {
      data: {
        likes: totalLikes,
      },
    });
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  },


  async handleDisike(ctx) {

    // @ts-ignore
    // const { results, pagination } = await strapi.service('api::article.article').find(sanitizedQueryParams);
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne('api::article.article', ctx.params.id, {
      populate: { someRelation: true },
    });
    const totalLikes = preEntry.likes !== null?preEntry.likes-1:0
    const entry = await strapi.entityService.update('api::article.article', preEntry.id, {
      data: {
        likes: totalLikes,
      },
    });
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  },
  async handleUpdateView(ctx) {
    // @ts-ignore
    // const { results, pagination } = await strapi.service('api::article.article').find(sanitizedQueryParams);
    // @ts-ignore
    const preEntry = await strapi.entityService.findOne('api::article.article', ctx.params.id, {
      populate: { someRelation: true },
    });
    const totalViews = preEntry.views !== null?preEntry.views+1:0
    const entry = await strapi.entityService.update('api::article.article', preEntry.id, {
      data: {
        views: totalViews,
      },
    });
    // @ts-ignore
    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedResults);
  }

}));

