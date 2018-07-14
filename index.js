var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Thanks');
});

port = 9090;
app.listen(port);
console.log('Listening at http://localhost:' + port);
