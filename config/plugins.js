module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "gedeyuna@gmail.com",
        defaultReplyTo: "gedeyuna@gmail.com",
        testAddress: "win4y4@gmail.com",
      },
    },
  },
  // ...
});
