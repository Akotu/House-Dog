const Discord = require('discord.js');
const client = new Discord.Client();


require('dotenv').config();

var token = process.env.DISCORD_BOT_TOKEN

var fs = require('fs');

global.servers = {};

client.login(token);

require('./site.js')
client.once('ready', () => {
	console.log('House-Dog is ready for action!');
  console.log(`Logged in as ${client.user.tag}!`);
});

var responses = {};
var testFolder = './commands/';

fs.readdir(testFolder, function(err, files) {
    files.forEach(function(file) {
    //console.log(file);//
    try {
      responses[file] = require(testFolder + file);
    } catch (e) {
      console.log(e);
    }
    });
  
  });
  client.on("message", function(msg) {//https://discord.js.org/#/
    
    
    try{
      if(msg.channel.name){
        //console.log(msg.channel.guild.name + '#' + msg.channel.name + '['+msg.channel.id+']: ' + msg.author.username + ': ' + msg.content);
      } else {
        console.log('PM#: ' + msg.author.username + ': ' + msg.content);
      }
    }catch(error){
      console.log(error);
    }
    for(var response in responses){
      responses[response].command(client, msg, responses);
    }
  });


process.on('unhandledRejection', console.error);