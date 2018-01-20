/**
 * Created by liqi on 05/01/2018.
 */
// content of index.js
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var emailSend = require('./controllers/emailSend');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("home.html");
});
app.post('/emailSend',emailSend);

app.listen(3000,function(){
    console.log("Started on PORT 3000");
})

