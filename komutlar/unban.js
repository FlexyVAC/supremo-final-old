const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'warns');
  if (!modlog) return message.reply('`warns` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldırma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);

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
  aliases: ['ub'],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};
