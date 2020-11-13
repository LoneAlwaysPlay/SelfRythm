const strings = require("../strings.json");
/** 
 * @description Loop the current voice channel the user is in
 * @param {Discord.Client} client the client thats runs the commands
 * @param {Discord.Message} message the command's message
 * @param {Array<String>}args useless here  
 */
module.exports.run = async (client, message, args) => {

    let voiceChannel = message.member.voice.channel;
    const serverQueue = queue.get(message.guild.id);
    
    if(!voiceChannel){return message.channel.send(strings.notInVocal)};
    if(!serverQueue){return message.channel.send(strings.cantLoop)};

    serverQueue.connection = await voiceChannel.join();
    return message.channel.send(strings.joinMsg)

}