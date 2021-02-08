const utils = require("./utils");
const sgMail = require('@sendgrid/mail');

exports.startCheckoutSession = async (req, res) => {
    if (Array.isArray(req.body)) {
        const items = await utils.getItemsByIds(req.body.map(item => { return item.productId })),
            line_items = [];

        for (let i = 0; i < req.body.length; i++) {
            const itemInfo = items.find(item => { return item.id = req.body[i].productId });

            line_items.push({
                price: itemInfo.price.id,
                quantity: req.body[i].quantity,
                description: `${ itemInfo.name }, Size: ${ req.body[i].size }, Color: ${ req.body[i].color }`
            });
        }

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

    console.log({key: process.env.SENDGRID_API_KEY });

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
        return res.status(200).send(items).end();
    } catch (err) {
        return res.status(404).end();
    }

}

exports.root = (req, res) => {
    return res.status(200).end();
}