var express = require('express');
var app = express();
var router = require('./router/main')(app);
app.use(express.static(__dirname+'/views'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8001, function(){
    console.log("Express server has started on port 3000")
})