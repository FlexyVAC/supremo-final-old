const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("||SUNUCU ICONU||")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

    client.elevation = message => {
      if(!message.guild) {
      return; }
      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      if (message.author.id === settings.sahip) permlvl = 4;
      return permlvl;
    };


  };

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};