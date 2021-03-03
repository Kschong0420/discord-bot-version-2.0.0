module.exports = {
    name: 'ms',
    description: "show user bot ping!",
    execute(client, message, args) {
        message.channel.send('Finding bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Vanilla Bot's ping is ${ping}`);
        })
    }
}