const utils = require("./utils"),
    axios = require("axios"),
    Stripe = require("stripe")(utils.getStripeAPIKey());

exports.getAllItems = async (req, res) => {
    return res.status(200).send(await Stripe.products.list()).end();
}

exports.root = (req, res) => {
    return res.status(200).end();
}