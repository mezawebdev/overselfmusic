const express = require("express"), 
    app = express(),
    controller = require("./controllers");

app.post("/shop/get-items", controller.getItems);
app.post("/shop/get-items-with-size", controller.getItemsWithSize);
app.get("/shop/get-item", controller.getItem);
app.get("/shop/get-all-items", controller.getAllItems);
app.get("/", controller.root);

module.exports = {
    path: "/api",
    handler: app,
}
