const argsInfo = require("./args-info");

module.exports = {
  name: "r",
  description: "D10",
  execute(message, args) {
    if (args.length === 0) {
      return message.channel.send(
        `Please select amount of D10s to roll, ${message.author}!`
      );
    }
    if (args[0]) {
      let amount = parseInt(args[0]);
      let resultMSG = [];
      let rerollDice = 0;
      let successes = 0;
      let rerollResultMSG = [];
      let rerollSuccesses = 0;
      for (let i = 0; i < amount; i++) {
        let random = Math.random();
        let result = Math.floor(random * 10 + 1);
        if (result >= args[1]) {
          successes++;
        } else if (result === 1) {
          successes--;
        }
        if (result === 10) {
          rerollDice++;
          if (args[2]) {
            successes++;
          }
        }
        resultMSG.push(result);
      }

      if (rerollDice > 0) {
        for (let i = 0; i < rerollDice; i++) {
          let random = Math.random();
          let result = Math.floor(random * 10 + 1);
          if (result >= args[1]) {
            rerollSuccesses++;
          }
          rerollResultMSG.push(result);
        }
      }
      let cleanMSG = resultMSG.join(", ");
      let cleanRerollResultMSG = rerollResultMSG.join(", ");

      return message.channel.send([
        `${message.author} rolls...`,
        `${cleanMSG} `,
        `Successes = ${successes}`,
        `Reroll Dice = ${rerollDice}`,
        `Reroll Result = ${cleanRerollResultMSG}`,
        `Reroll Successes = ${rerollSuccesses}`,
        `Total Successes = ${successes + rerollSuccesses}`,
      ]);
    }
  },
};
