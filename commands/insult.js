module.exports = {
    command: function(bot, msg) {
      
      let member = msg.mentions.members.first();

        var phrase = '-insult';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                    var insults = [
                        'you consistently set low expectations and fail to achieve them',
                        'anyone who ever said they loved you lied.',
                        'if only your mother had swallowed you instead…',
                        'I hope your day is filled with people like you.',
                        'life is full of disappointments, just ask your parents.',
                        'when your mom dropped you off at school, she got a fine for littering.',
                        'how did you get here? Did someone leave your cage open?',
                        'if laughter is the best medicine, your face must be curing the world.',
                        'you\'re so ugly, your portraits hang themselves',
                        'wait, if you are here, who\'s picking the cotton??',
                        'last time your dad actually played with you was when you were in his balls',
                    ];
                    var random = Math.floor(Math.random() * insults.length);
                    var message = insults[random];
                  
                   
                  msg.channel.send(member.displayName + ' ' +message);
                  
                }
            });
        }
    },
    help: '`-insult [user]` Insults someone'
};