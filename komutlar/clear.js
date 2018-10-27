const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



  
exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ');
  if(sayi.length < 1 ) {
    return message.reply("Silmem İçin Bir Miktar Belirt!")
  }else{
    message.channel.bulkDelete(sayi);
    message.channel.send(sayi + " Adet Mesaj Silindi!").then(msg => {
      msg.delete("5000")
    })
  }
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
  aliases: ['cl'],
  permLevel: 2 
};

exports.help = {
  name: 'clear', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'clear <miktar>'
};