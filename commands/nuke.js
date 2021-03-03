module.exports = {
    name: 'nuke',
    description: "nuke the whole chat and grow back!",
    async execute(client, message, args){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Unknown Command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I need MANAGE_CHANNELS permissions!') //give bot manage channels permission to work

        await message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send('This channel has been nuked!')
        })
    }
}