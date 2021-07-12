const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong.");
  } else if (command === "beep") {
    message.channel.send("Boop.");
  } else if (command === "server") {
    message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === "user-info") {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (command === "args-info") {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    } else if (command === "kick") {
      // grab the "first" mentioned user from the message
      // this will return a `User` object, just like `message.author`
      const taggedUser = message.mentions.users.first();

      message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }

    message.channel.send(`First argument: ${args[0]}`);
  }
});

client.login(token);
