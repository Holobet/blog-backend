module.exports = {
  routes: [
    {
      method: "GET",
      path: "/quizzes/:id/like",
      handler: "quiz.handleLike",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quizzes/:id/dislike",
      handler: "quiz.handleDisike",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/quizzes/:id/view",
      handler: "quiz.handleUpdateView",
      config: {
        auth: false,
      },
    },
  ],
};
