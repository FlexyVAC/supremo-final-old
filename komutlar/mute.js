const Discord = require('discord.js');
exports.run = (client, message, args) => {

	if(command === "mute")
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
						message.reply(`${killMember.user.username} was succesfully silenced`).catch(console.error);
					}, 5000);
				}).catch(console.error);		
		}
	}
}
