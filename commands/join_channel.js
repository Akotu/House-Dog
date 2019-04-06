const YTDL = require('ytdl-core')

function Play(connection, message){
  var server = servers[message.guild.id]
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: 'audioonly'}, {bitrate: 192000}))
  server.queue.shift()
  server.dispatcher.on('end', function()
    {
      if(server.queue[0])
    {
      Play(connection,message);
    } 
      else 
    {
      connection.disconnect();
    }
  })
}

module.exports = {
    command: function(bot, msg) {
        var phrase = '-join';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                    
                  if(msg.member.voiceChannel)
                  {
                    if (!msg.guild.voiceConnection)
                    {
                      if(!servers[msg.guild.id])
                      {
                        servers[msg.guild.id] = {queue: []}
                        
                      }
                      
                      msg.member.voiceChannel.join()
                        .then(connection => {
                        var server = servers[msg.guild.id];
                        msg.channel.send('Good ChOiCee');
                        server.queue.push(msg.content);
                        Play(connection, msg);
                        
                      })
                    }
                  } else 
                  {
                    msg.reply('You are not in a voice channel!')
                  }
                    
                }
            });
        }
    },
    help: '`-join [youtube URL]` plays a song from youtube'
};