var express = require('express');
var storage = [];
// var path = require('path');
//var requestHandler = require("./request-handler.js")

var app = express();

app.use('/', express.static(__dirname + '/Client'));
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port ' + server.address().port);
});

app.post('/saved', function(req, res) {
    console.log(req);
    if (req.body) {
        console.log(req);
        var obj = req.body;
        
        console.log(obj);

        storage.push(obj);
        res.status(200);
        res.send('OK');
    }else{
        res.sendStatus(400);
    }

});