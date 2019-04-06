module.exports = (function () {
  var port = process.env.PORT || 80;
  var express = require("express");
  var app = express();
  app.use(express.static('public')); //use static files in ROOT/public folder
  app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
  
  var listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
})();