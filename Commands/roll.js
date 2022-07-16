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
      let difficulty = args[1];
      let specialty = args[2];
      let resultMSG = [];
      let successes = 0;
      let rerollDice = 0;
      let rerollResultMSG = [];
      let rerollSuccesses = 0;
      for (let i = 0; i < amount; i++) {
        let random = Math.random();
        let result = Math.floor(random * 10 + 1);
        if (result >= difficulty) {
          successes++;
        } else if (result === 1) {
          successes--;
        }
        if (result === 10) {
          rerollDice++;
          if (specialty == "s") {
            successes++;
          }
        }
        resultMSG.push(result);
      }

      if (rerollDice > 0) {
        for (let i = 0; i < rerollDice; i++) {
          let random = Math.random();
          let result = Math.floor(random * 10 + 1);
          if (result >= difficulty) {
            rerollSuccesses++;
            if (result === 10 && specialty) {
              rerollSuccesses++;
            }
          }
          rerollResultMSG.push(result);
        }
      }

      let cleanMSG = formatMSG(resultMSG, difficulty);

      let cleanRerollResultMSG = formatMSG(rerollResultMSG, difficulty);

      return message.channel.send([
        `${message.author} rolls...`,
        `${cleanMSG} `,
        `Successes : ${successes}`,
        `Reroll Dice : ${rerollDice}`,
        `Reroll Result : ${cleanRerollResultMSG}`,
        `Reroll Successes : ${rerollSuccesses}`,
        " ",
        `**T o t a l  S u c c e s s e s** : **${successes + rerollSuccesses}**`,
      ]);
    }
  },
};
function stringifyDie(singleDie, difficulty) {
  if (singleDie === 1) {
    return `*${singleDie}*`;
  } else if (singleDie < difficulty) {
    return `${singleDie}`;
  } else {
    return `**${singleDie}**`;
  }
}
function formatMSG(unsortedArray, difficulty) {
  unsortedArray.sort((a, b) => b - a);
  let boldArray = unsortedArray.map((singleDie) => stringifyDie(singleDie, difficulty));
  let sortedBoldArray = boldArray.join(", ");
  return sortedBoldArray;
}
// function explodingDice(
//   rerollDice,
//   difficulty,
//   specialty,
//   rerollSuccesses,
//   rerollResultMSG
// ) {
//   let superduper = rerollDice;
//   rerollDice = 0;
//   if (superduper === 0) {
//     console.log("End");
//     return;
//   } else if (superduper > 0) {
//     for (let i = 0; i < superduper; i++) {
//       let random = Math.random();
//       let result = Math.floor(random * 10 + 1);
//       if (result >= difficulty) {
//         rerollSuccesses++;
//         if (result === 10) {
//           rerollDice++;
//           if (specialty) {
//             rerollSuccesses++;
//           }
//         }
//       }
//       rerollResultMSG.push(result);
//     }
//   }
//   explodingDice();
// }
