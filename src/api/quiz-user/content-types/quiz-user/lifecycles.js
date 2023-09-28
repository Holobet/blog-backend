module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "gedeyuna@gmail.com",
        subject: `${result.quiz}`,
        text: `${result.answerByUser}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
