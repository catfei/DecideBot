var { gameList } = require("../gameList");

exports.run = (client, message, args) => {
  console.log(gameList);
  gameList = [];
  while (gameList.length > 0) {
    gameList.pop();
  }
  console.log(gameList);
  message.channel.send("List cleared");
}

exports.name = "clear";