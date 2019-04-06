const urban = require('relevant-urban');

module.exports = {
    command: function(bot, msg) {
        var phrase = '-urban';
        if (msg.author.bot === false) {
            var wordsArr = msg.content.split(' ');
            wordsArr.map(function(word, index) {
                if (word.toLowerCase() === phrase) {
                  var res = msg.content.replace('-urban', '');
                  //var response = res.replace(/ /g,'')
                  var def = urban(res).then(res => msg.channel.send("**"+res.word+"**"+"\n"+"```" +res.definition+ "```"+ "\n "+"_"+res.example+"_")).catch(error => msg.channel.send('Ruh?'));              
                }
            });
        }
    },
    help: '`-urban [message]` searches urban dictionary for specified word'
};