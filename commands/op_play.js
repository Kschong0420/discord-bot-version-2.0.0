const DisTube = require("distube");

module.exports = {
    name: 'op_play',
    description: "automatic add op song in queue!",
    execute(client, message, args){
        message.channel.send('v say v play https://youtu.be/wLDLnu9Ub3s');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/MvkI-6Vw87k');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/7i1q-mih8Is');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/hHSkFls-rgM');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/c23W5sNxNO4');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/NVdoS1GgD3k');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/z1rZVgpC8xc');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/dflERjiF1dM');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/peWRxL1Wck8');
        message.delete().catch(err => console.log(err));
        message.channel.send('v say v play https://youtu.be/guJWro5LuhU');
        message.delete().catch(err => console.log(err));
        message.channel.send('v purge 11')
    }
}