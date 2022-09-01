var { gameList } = require("../gameList");

exports.run = (client, message, args) => {
  let gameToAdd = args.join(" ");

  if (!gameToAdd) {
    return message.channel.send({ content: "You need to specify a game" });
  }
  else if (gameList.find((value) => { return value == gameToAdd; }) != undefined) {
    return message.channel.send({ content: `${gameToAdd} is already in the list` });
  }
  else {
    gameList.push(gameToAdd);
    message.channel.send(`Added ${gameToAdd} to list`);
  }
}

exports.name = "add";