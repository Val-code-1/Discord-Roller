module.exports = {
  name: "user-info",
  description: "User Info",
  execute(message, _args) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  },
};
