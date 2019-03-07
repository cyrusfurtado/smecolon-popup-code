const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'src')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }
    else {
        //move on
        next();
    }
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});


app.listen(3000, function() {
    console.log('server is running');
});