const Discord = require('discord.js');
const client = new Discord.Client();
const { OpusEncoder } = require('@discordjs/opus');
const { phreak } = require('./commands/phreak');
const { sion } = require('./commands/sion');
const { rl } = require('./commands/rl');
const { bruh } = require('./commands/bruh');
const { jeff } = require('./commands/jeff');
const { faker } = require('./commands/faker');
const { mana } = require('./commands/mana');
const { borat } = require('./commands/borat');
var prefix = process.env.prefix;
const {prefixLocal, TOKEN} = require('./config.json');

const encoder = new OpusEncoder(48000, 2);


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

if(process.env.TOKEN){
    client.login(process.env.TOKEN);
}
else{
    client.login(TOKEN);
    prefix = prefixLocal;
}

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

    //nameJeff
    else if (command === 'jeff'){
        jeff(message);
    }

    //faker
    else if (command === 'faker'){
        faker(message);
    }

    //no mana
    else if (command === 'mana'){
        mana(message);
    }

    //borat very nice
    else if (command === 'borat'){
        borat(message);
    }
});
