exports.phreak = async message => {
    const channel = message.member.voice.channel;
    if(channel){
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./phreakQuadra.mp3');
        dispatcher.on('start', () => {
            dispatcher.setVolume(2.0);
            console.log('audio.mp3 is now playing!');
        });
        dispatcher.on('finish', () => {
            console.log('audio.mp3 has finished playing!');
            connection.disconnect();
        });
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
        
    } 
    else{
        message.reply('You must be in a voice channel to use this command!')
    }
}