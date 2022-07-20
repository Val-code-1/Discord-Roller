const argsInfo = require("./args-info");

module.exports = {
  name: "i",
  description: "initiative",
  execute(message, args) {
    if (args.length !== 2) {
      return message.channel.send("Please type ~i (dex score) (wits score) to use.");
    }
    if (args[0]) {
      let dex = parseInt(args[0]);
      let wits = parseInt(args[1]);
      let random = Math.random();
      let roll = Math.floor(random * 10) + 1;
      if (isNaN(dex) || isNaN(wits)) {
        return message.channel.send(
          "Make sure you entered only numbers as your dex and wits scores."
        );
      }
      if (dex > 30 || wits > 30) {
        return message.channel.send(
          "We don't believe your dex or wits to be that high. If they are congratulations, you win the fight."
        );
      }
      return message.channel.send(
        `Dex: ${dex} + Wits: ${wits} + ${message.author}'s roll: ${roll} = ${
          dex + wits + roll
        }`
      );
    }
  },
};
