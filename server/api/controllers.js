const Stripe = require("stripe")(process.env.SHOP_MODE === "test" ? process.env.STRIPE_SECRET_API_KEY_TEST : process.env.STRIPE_SECRET_API_KEY_LIVE),
    utils = require("./utils"),
    sgMail = require('@sendgrid/mail'),
    axios = require("axios"),
    { path } = require("app-root-path"),
    Order = require("../database/entities/Order"),
    PrintfulAPI = require("../database/apis/PrintfulAPI");

exports.fetchOrderTotal = async (req, res) => {
    if (typeof req.query.on !== "string") return res.status(401).end();

    const order = new Order(req.query.on);

    try {
        await order.fetch();
        const total = (order.data.stripeCheckoutSessionData.amount_subtotal / 100).toFixed(2);
        return res.status(200).send(total).end();
    } catch (err) {
        console.log(err);
        console.log("error!");
        return res.status(404).end();
    }
}

exports.getEstimatedCosts = async (req, res) => {
    if (typeof req.body === undefined) return res.status(403).end();

    try {
        return res.status(200).send(await PrintfulAPI.getEstimatedCosts(req.body)).end();
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

exports.stripeWebhook = async (req, res) => {
    const payload = req.body,
        sig = req.headers['stripe-signature'];

    let event;

    // console.log({
    //     shopmode: process.env.SHOP_MODE,
    //     livesecret: [rocess.env.STRIPE_API_WEBHOOK_SECRET_LIVE,
    // });

    try {
        console.log("try..");
        event = Stripe.webhooks.constructEvent(payload, sig, process.env.SHOP_MODE === "live" ? process.env.STRIPE_API_WEBHOOK_SECRET_LIVE : process.env.STRIPE_API_WEBHOOK_SECRET_TEST);
        console.log("worked!")
    } catch (err) {
        console.log({err});
        return res.status(400).send(`Webhook Error: ${ err.message }`);
    }

    if (event.type === 'checkout.session.completed') {
        const order = new Order(event.data.object.client_reference_id, true);
        order.data.stripeCheckoutSessionData = event.data.object;
        await order.save();
        await order.fulfill();
    }

    return res.status(200).end();
}

exports.startCheckoutSession = async (req, res) => {
    if (Array.isArray(req.body.items)) {
        const items = await utils.getItemsByIds(req.body.items.map(item => { return item.productId })),
            line_items = [];

        // console.log(req.body.items);
        // console.log("----");
        // console.log(items);

        for (let i = 0; i < req.body.items.length; i++) {
            const itemInfo = items.find(item => { return item.name === req.body.items[i].name });
            line_items.push({
                price: itemInfo.price.id,
                quantity: req.body.items[i].quantity,
                description: `${ itemInfo.name }, Size: ${ req.body.items[i].size }, Color: ${ req.body.items[i].color }`
            });
        }

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Shipping"
                },
                unit_amount: req.body.shipping_cost * 100
            }, 
            quantity: 1
        });

        const session = await utils.startCheckoutSession(line_items);

        return res.status(200).json({ id: session.id }).end();
    } else {
        return res.status(400).end();
    }
}

exports.saveCart = (req, res) => {
    res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true });
    return res.status(200).end();
}

exports.getItems = async (req, res) => {
    try {
        const items = await utils.getItemsByIds(req.body.items);
        return res.status(200).send(items).end();
    } catch (err) {
        console.log(err);
        return res.status(404).end();
    }
}

exports.sendEmail = (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    if (req.query.name && req.query.email && req.query.message) {
        const msg = {
            to      : "band@overselfmusic.com",
            from    : "noreply@overselfmusic.com",
            subject : "OverselfMusic.com Contact Form Submission",
            text    : "OverselfMusic.com",
            html    : `
                <img src="http://overselfmusic.com/_nuxt/assets/images/overself-logo-temp.png" />
                <br />
                <strong>Someone Submitted Your Contact Form</strong>
                <br />
                <p>
                    <span style="color:red;font-weight:bold;">Name: </span><br />
                    ${ req.query.name }
                </p>
                <p>
                    <span style="color:red;font-weight:bold;">Email: </span><br />
                    ${ req.query.email }
                </p>
                <p>
                    <span style="color:red;font-weight:bold;">Message: </span><br />
                    ${ req.query.message }
                </p>
            `
        };
    
        sgMail.send(msg);
    }

    return res.status(200).end();
}

exports.getItemsWithSize = async (req, res) => {
    try {
        const items = await utils.getItemsByIds(req.body.items.map(item => { return item.id })),    
            itemsFormatted = [];

        if (items) {
            for (let i = 0; i < items.length; i++) {
                itemsFormatted.push({ ...items[i], size: req.body.items[i].size });
            }
        }

        return res.status(200).send(itemsFormatted).end();
    } catch (err) {
        console.log(err);
        return res.status(404).end();
    }
}

exports.getItem = async (req, res) => {
    try {
        const item = await utils.getItemsByIds([req.query.id]);
        return res.status(200).send(item).end();
    } catch (err) {
        return res.status(404).end();
    }
}

exports.getAllItems = async (req, res) => {
    try {
        const items = await utils.getAllItems();
        console.log(items);
        return res.status(200).send(items).end();
    } catch (err) {
        return res.status(404).end();
    }

}

exports.root = (req, res) => {
    return res.status(200).end();
}