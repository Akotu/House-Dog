module.exports = {
    command: function(bot, msg) {
        var phrase = '-ping';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                    msg.reply('pong');
                }
            });
        }
    },
    help: '`-ping` Tests this bot'
};