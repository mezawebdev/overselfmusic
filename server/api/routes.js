const express = require("express"), 
    app = express(),
    controller = require("./controllers");

app.post("/start-checkout-session", controller.startCheckoutSession);
app.post("/shop/save-cart", controller.saveCart);
app.post("/shop/get-items", controller.getItems);
app.post("/shop/get-items-with-size", controller.getItemsWithSize);
app.get("/shop/get-item", controller.getItem);
app.post("/send-email", controller.sendEmail);
app.get("/shop/get-all-items", controller.getAllItems);
app.get("/", controller.root);

module.exports = {
    path: "/api",
    handler: app,
}
