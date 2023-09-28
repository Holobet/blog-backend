module.exports = {
  mutation: `
    createQuizUser(email: String!, quiz: String!, answerByUser: String!): QuizUser!
  `,
  resolver: {
    Mutation: {
      createQuizUser: {
        resolverOf: "application::quiz-user.quiz-user.create",
        resolver: async (obj, options, { context }) => {
          // Create new quiz user
          const quizUser = await strapi.api["quiz-user"].controllers[
            "quiz-user"
          ].create(options);

          // Send email
          const { email, quiz, answerByUser } = options.input;

          try {
            await strapi.plugins["email"].services.email.send({
              to: email,
              from: "gedeyuna@gmail.com",
              subject: quiz,
              text: answerByUser,
            });
          } catch (err) {
            console.log(err);
          }

          // Return created quiz user
          return quizUser;
        },
      },
    },
  },
};
