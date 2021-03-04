const Discord = require('discord.js')

module.exports = {
  name: 'membercount',
  description: 'show amount of users in the server!',
  execute (client, message, args) {
    const membersInServer = message.guild.memberCount
    const memberEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name} has ${membersInServer} members in the server!`)

    message.channel.send(memberEmbed)
  }
}
