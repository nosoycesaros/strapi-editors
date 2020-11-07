'use strict';

/**
 * strapi-editors.js controller
 *
 * @description: A set of functions called "actions" of the `strapi-editors` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
    // const entries = await strapi.query('pages').find();
    ctx.send({
      200: 'ok'
    });
  },
  get: async (ctx) => {
    // Add your own logic here.
    const entries = await strapi.query(ctx.params.collection).find();
    ctx.send(entries);
  },
  edit: async ctx => {
    const entries = await strapi.query(ctx.params.collection).findOne({id: ctx.params.id})
    ctx.send(entries)
  },

  save: async ctx => {
    return strapi.query(ctx.params.collection).update({id: ctx.params.id}, ctx.request.body)
  }
};
