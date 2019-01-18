const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

    const streamOptions = {seek: 0, volume: 1};
    let voiceChannelID = "507080025749848064";

    console.log("Iniciando Comando de Voz");

    if (voiceChannelID != null) {
        if(message.guild.channels.get(voiceChannelID)){
            let vc = message.guild.channels.get(voiceChannelID);
            console.log("Next stop, connection");

            vc.join().then(connection => {
                console.log("[VOICE CHANNEL] joined countdown channel.");
                const stream = ytdl('https://youtu.be/yfMTjSfchB4', {filter: 'audioonly'});
                const dispatcher = connection.playStream(stream, streamOptions);

                dispatcher.on("end", end => {
                    console.log("[VOICE CHANNEL] left countdown channel.");
                });
            }).catch(err => {
                console.log(err);
            });

        }
    }
}

module.exports.help = {
    name: "5mc"
}