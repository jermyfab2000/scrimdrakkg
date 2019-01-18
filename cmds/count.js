const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

    const streamOptions = {seek: 0, volume: 1};
    let voiceChannelID = "507080025749848064";
    let id = 'https://youtu.be/PDtaH1-WloI';
    console.log("Starting Voice Command");
    
    if (voiceChannelID != null) {
        if(message.guild.channels.get(voiceChannelID)){
            let vc = message.guild.channels.get(voiceChannelID);
            console.log("Next stop, connection");

            vc.join().then(connection => {
                console.log("[VOICE CHANNEL] joined countdown channel.");
                const stream = ytdl(id, {highWaterMark: 1024 * 1024 * 10 , quality: 'highestaudio'});
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
    name: "count"
}
