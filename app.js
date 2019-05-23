const express = require('express');
var bodyParser = require('body-parser');
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
const app = express();

var tweetController = require("./controllers/tweet.controller");

app.use(express.json());
app.use(bodyParser.json());

//TWEETS SHOW
app.get('/tweets',tweetController.show);
//TWEETS CREATE
app.post('/tweets',tweetController.create);
//TWEETS DELETE
app.delete('/tweets/:id',tweetController.deletar);
//TWEETS UPDATE
app.put('/tweets/:id',tweetController.update);

app.listen(appEnv.port, '0.0.0.0', function() {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});