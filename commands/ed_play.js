const DisTube = require("distube");

module.exports = {
    name: 'ed_play',
    description: "automatic add ed song in queue!",
    execute(client, message, args){
        message.channel.send('v say v play https://youtu.be/bAZFZ-zILy4');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/h0bj2dHz_60');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/ya8kQx14cIY');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/N2x1aeM3shc');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/WetLWga9BEs');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/PMPrVvdctOI');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/HhnETSN6U_E');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/NfPx0XSo61Y');
        message.delete().catch(err => console.log(err));
        message.channel.send('v purge 9')
    }
}