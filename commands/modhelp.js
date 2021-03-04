const Discord = require('discord.js')

module.exports = {
  name: 'modhelp',
  description: 'Mod Command List',
  execute (client, message, args) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      const newEmbed = new Discord.MessageEmbed()
        .setColor('#BE0F34')
        .setTitle('Vanilla Command List')
        .setDescription('Type v <command> to use me!')
        .addFields(
          { name: 'nuke', value: 'nuke the channel and renew it' },
          { name: 'purge <2 ~ 100>', value: 'clear the amount of message' },
          { name: 'v hangman <#channel> <word>', value: 'open a new hangman game' }
        )
        .setImage('https://i.imgur.com/FdqTuMJ.jpg')

      message.channel.send(newEmbed)
    } else {
      message.reply('you do not have permission to use this command')
    }
  }
}
