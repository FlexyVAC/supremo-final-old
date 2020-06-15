const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  if(command === "sustur")
{
	let myRole = message.guild.roles.find("name", "Discord Admin[DA]");
	if(!message.member.roles.has(myRole.id))
	{
		return message.reply("you pleb, you don't have the permission to use this command.")
	}
	if(message.mentions.users.size === 0) 
	{
	return message.reply("please mention a user to kill");
	}
	let killMember = message.guild.member(message.mentions.users.first());
	if (!killMember)
	{
		return message.reply("user doesn't exist or not valid");
	}
	let roleMembro = message.guild.roles.find("name", "Players");
	killMember.removeRole(roleMembro).then(member => 
	{
		message.reply(`${member.user.username} was succesfully removed to Membro role`).catch(console.error);
	}).catch(console.error);

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sustur` Adlı Komutu Özel Mesajlarda Kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'pro-bot');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Susturulmuş');
  if (!modlog) return message.reply('`warns` kanalını bulamıyorum.').catch(console.error);
  if (!muteRole) return message.reply('`Susturulmuş` adlı bir rol bulamıyorum.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kimi susturacağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Susturma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
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
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: '/sustur [kullanıcı] [sebep]'
};
