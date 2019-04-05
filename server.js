const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix , token } = require('./config.json');



client.login(token);


client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

   
    let member = message.mentions.members.first();

    if (message.content.startsWith(`${prefix}lick`)){

        message.channel.send('👅 ' + member.displayName + ' has been Licked!' + ' 👅');

    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

    } else if (command === 'args-info') {

        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
        
    } else if (command === 'prune') {
        const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            	return message.reply('you need to input a number between 1 and 99.');
             
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
        
    }
})