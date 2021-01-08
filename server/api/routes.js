const express = require("express"), 
    app = express(),
    controller = require("./controllers");

app.get("/shop/get-all-items", controller.getAllItems);
app.get("/", controller.root);

module.exports = {
    path: "/api",
    handler: app,
}
