const Discord = require('discord.js');


exports.run = function(client, message) {
  let myRole = message.guild.roles.find("name", "Discord Admin[DA]");
    if(!message.member.roles.has(myRole.id))
    {
      return message.reply("Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin!")
    }
    if(message.mentions.users.size === 0) 
    {
    return message.reply("Ağzı tıkanıcak kişiyi seçiniz!");
    }
    let killMember = message.guild.member(message.mentions.users.first());
    if (!killMember)
    {
      return message.reply("Kullanıcı bulunalamadı");
    }
    let roleMembro = message.guild.roles.find("name", "Players");
    let roleSilenced = message.guild.roles.find("name", "Susturulmuş");
    if(killMember.roles.has(roleMembro.id))
    {
      killMember.removeRole(roleMembro).then(() => 
      {	
        setTimeout(function()
        {
          if(!killMember.roles.has(roleSilenced.id))
          {
            killMember.addRole(roleSilenced);
          }
            message.reply(`${killMember.user.username} adlı Kullanıcının Ağzı tıkandı!`).catch(console.error);
          }, 500);
        }).catch(console.error);		
    }

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 2 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'gag', //adını belirledik (kullanmak için gereken komut)
  description: 'Gag komutu', //açıklaması
  usage: '/gag <@kullanıcı>' //komutun kullanım şekli (mesela hava <bölge>)
};
