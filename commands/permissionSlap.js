module.exports = {
    command: function(bot, msg) {
        var phrase = '-slap';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                  
                    let allowedRole = msg.guild.roles.find("name", "𝕷𝖔𝖗𝖉𝖘");
                  
                  if (msg.member.roles.has(allowedRole.id)) {
                        // allowed access to command
                      let member = msg.mentions.members.first();
                       msg.channel.send(member.displayName + ' ' +'you got slapped SON!');
                  } else {
                       msg.reply('You do not have access to that command') // not allowed access
                  }
                
                    
                    
                    //msg.channel.send('You are not good enough!!!!');
                }
                         });
        }
    },
    help: '`-slap:` Slaps the user. Only lords can use this for testing purposes'
};