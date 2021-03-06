const { Permissions } = require('discord.js')
const { hangman } = require('reconlx')

module.exports = {
  name: 'hangman',
  execute (client, message, args) {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if (!channel) return message.channel.send('Please specify a channel')
    const word = args.slice(1).join(' ')
    if (!word) return message.channel.send('Please specify a word to guess.')

    const hang = new hangman({
      message: message,
      word: word,
      client: client, // according to execute(<name>, messages, args)
      channelID: channel.id,
      permission: 'MANAGE_MESSAGES'
    })

    hang.start()
  }
}
