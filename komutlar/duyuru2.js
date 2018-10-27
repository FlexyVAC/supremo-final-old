const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Duyuru İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('DUYURU')
    .setColor(3447003)
    .setDescription(`${mesaj}`)
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
  aliases: ['duyur'],
  permLevel: 3
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: '/duyuru [Duyuruda Yazıcak Şey]'
};