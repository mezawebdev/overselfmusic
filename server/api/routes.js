const express = require("express"), 
    app = express(),
    controller = require("./controllers"),
    bodyParser = require("body-parser");

app.post("/stripe-webhook", bodyParser.raw({ type: "application/json" }), controller.stripeWebhook);
app.post("/get-estimated-costs", controller.getEstimatedCosts);
app.post("/start-checkout-session", controller.startCheckoutSession);
app.post("/shop/save-cart", controller.saveCart);
app.post("/shop/get-items", controller.getItems);
app.post("/shop/get-items-with-size", controller.getItemsWithSize);
app.get("/shop/get-item", controller.getItem);
app.get("/shop/fetch-order-total", controller.fetchOrderTotal);
app.post("/send-email", controller.sendEmail);
app.get("/shop/get-all-items", controller.getAllItems);
app.get("/", controller.root);

module.exports = {
    path: "/api",
    handler: app,
}
