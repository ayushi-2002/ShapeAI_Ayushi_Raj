const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req, res){
    res.sendFile(__dirname+"/bmi_calc.html");
});

app.post("/" , function(req, res){
    var wt = Number(req.body.weight);
    var ht = Number(req.body.height);
    var BMI = wt/(ht*ht);
    res.send("Your BMI is "+ BMI +" kg/m^2");
});

app.listen(1500,function(){
    console.log("Server started!!!");
});

