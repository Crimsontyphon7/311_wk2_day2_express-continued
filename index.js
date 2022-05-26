const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("../data/contacts");
const vehicles = require("../data/vehicles");
const comments = require("../data/comments");
const products = require("../data/products");

const app = express();

const port = process.env.PORT || 4000;
const PORT = 4000 

app.get("/contacts", function(req, res) {
    return res.json(contacts);
});

app.get("/vehicles", function(req, res){
    return res.json(vehicles);
});

app.get("/comments", function(req, res){
    return res.json(comments);
});

qpp.get("/products", function(req, res){
    return res.json(products);
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
