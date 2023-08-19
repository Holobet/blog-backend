module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/articles/:id/like',
      handler: 'article.handleLike',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/:id/dislike',
      handler: 'article.handleDisike',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/:id/view',
      handler: 'article.handleUpdateView',
      config: {
        auth: false,
      },
    },
  ],
};
