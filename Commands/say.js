exports.run = (client, message, args) => {
  let toSay = args.join(" ");

  if (!toSay) {
    return mesage.channel.send({ content: "Tell me what to say" });
  }

  message.channel.send({ content: toSay });
}

exports.name = "say";