var fs = require("fs");

var formidable = require('express-formidable');

var express = require("express");
var app = express();






app.use(express.static("public"));

app.use(formidable());

app.post("/create-post", function (req, res) {

    fs.readFile(__dirname + '/data/posts.json', function (error, file) {

        console.log(file.toString());
        var parsedFile = JSON.parse(file);

        fs.writeFile("/posts.json", parsedFile, error => {
            console.log("", error);
        });
    });
    res.send("Post request to the home page");

    console.log(req.fields, '/create-post');

});














var server = app.listen(3000, () => {
    console.log("serever is listening on" + port + "ready to accept request");
});








