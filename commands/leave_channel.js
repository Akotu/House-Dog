module.exports = {
    command: function(bot, msg) {
        var phrase = '-leave';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                  
                     msg.member.voiceChannel.leave()
                   
                }
            });
        }
    },
    help: '`-leave` kicks bot from voice channel'
};