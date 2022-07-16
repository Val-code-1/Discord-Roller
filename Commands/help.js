module.exports = {
  name: "help",
  description: "help",
  execute(message) {
    message.channel.send("Welcome to Val's D10 roller for World of Darkness games!");
    message.channel.send(
      "This roller supports 10s to reroll, 1s to botch on initial rolls (but not rerolls) and specialties to count as double successes."
    );
    message.channel.send(
      "To use message ~r (Amount of Dice) (Difficulty) (s if applying a specialty)"
    );
    message.channel.send(
      "Ex: ~r 10 6 would be a roll of 10 dice at difficulty 6 with no specialty."
    );
  },
};
