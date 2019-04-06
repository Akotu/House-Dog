module.exports = {
    command: function(bot, msg, responses) {
        var phrase = '-help';
        var wordsArr = msg.content.split(' ');
        wordsArr.map(function(word, index) {
            if (word.toLowerCase() === phrase) {
                var message = [
                  'Tell Scooby to do something:',
                ];
                for (var thing in responses) {
                    message.push(responses[thing].help);
                }
                msg.reply(message.join('\n'));
            }
        });
    },
    help: '`-help` lists all commands'
};