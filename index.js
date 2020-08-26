const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { OpusEncoder } = require('@discordjs/opus');
const { phreak } = require('./commands/phreak');
const { sion } = require('./commands/sion');
const { rl } = require('./commands/rl');
const { bruh } = require('./commands/bruh');

//ffmpeg stuff
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const spawn = require('child_process').spawn;
const ffmpeg = spawn(ffmpegPath, args);
ffmpeg.on('exit', onExit);

const encoder = new OpusEncoder(48000, 2);


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', async message => {
    //if the message doesn't begin with '!' or it is from a bot account, do not consider it as a possible command
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //store the users command as an array of strings in 'args'
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    //take the first element to determine how to handle the command
    const command = args.shift().toLowerCase();

    //COMMANDS
    //phreak
    if (command === 'phreak'){
        phreak(message);
    }

    //sion ult
    else if (command === 'sion'){
        sion(message);
    }

    //this is rocket league
    else if (command === 'rl'){
        rl(message);
    }

    //bruh
    else if (command === 'bruh'){
        bruh(message);
    }

});
