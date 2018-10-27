const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Oylama İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('OYLAMA')
    .setColor(3447003)
    .setDescription(`${mesaj} \n\n\ Evet İçin: :thumbsup: Hayır İçin: :thumbsdown: `)
    return message.channel.sendEmbed(embed);

    client.elevation = message => {
      if(!message.guild) {
      return; }
      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      return permlvl;
    };

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: 'oylama',
  description: 'Oylama yapar.'
};