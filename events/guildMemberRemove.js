module.exports = member => {
  let guild = member.guild;
  member.send('Kayboldun. Ne oldu?');
  guild.defaultChannel.sendMessage(`${member.user.username} Evrenden Silindi!`);
};
