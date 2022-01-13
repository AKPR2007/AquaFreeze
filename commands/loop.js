const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const queue = message.client.queue.get(message.guild.id);

  if (!queue)
    return message.channel.send(
      ":x: There are no songs playing in this server"
    );

  queue.loop = !queue.loop;
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Master Loop Contrller",
        "https://cdn-icons-png.flaticon.com/512/2095/2095938.png"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "**Loop is" +
          (queue.loop == true ? " Enabled " : " Disabled ") +
        "for current song :white_check_mark: **"
      )
  );
};
