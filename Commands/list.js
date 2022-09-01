const Discord = require("discord.js");
var { gameList } = require("../gameList");

exports.run = (client, message, args) => {
  const list = gameList.join("\n");
  const embed = new Discord.MessageEmbed()
    .setTitle(`Total Games: ${gameList.length}`)
    .setDescription(list);
  message.channel.send({ embeds: [embed] });
}

exports.name = "list";