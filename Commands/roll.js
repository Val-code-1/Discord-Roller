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
      for (let i = 0; i < amount; i++) {
        let random = Math.random();
        let result = Math.floor(random * 10 + 1);
        resultMSG.push(result);
      }
      let cleanMSG = resultMSG.join(", ");
      return message.channel.send([`${cleanMSG} `, `${message.author}`]);
    }
  },
};
