// express
var express = require("express");
var path = require("path");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// revisar que si funciona
app.listen(PORT, function(){

    console.log("Server running on port: ", PORT);
    
})

// GET homepage
app.get('/', function(req, res) {

    res.send('You are on the homepage');
});

// POST send
app.post("/post", function(req, res) {

    console.log(req.body);
    res.send(`Welcome ${req.body.user}`);
});

// DELETE taskid
app.delete("/delete", function(req, res){

    console.log(req.body);
    res.json({delete: true});
});

// PUT /put/{ID}
app.put("/put/:id", function(req, res) {
 
    res.send(`Task ${req.params.id} updated`);
});