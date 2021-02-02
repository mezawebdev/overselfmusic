const utils = require("./utils");
const sgMail = require('@sendgrid/mail');

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
        const items = await utils.getItemsByIds(req.body.items.map(item => { return item.id }));
        
        if (items) {
            items.forEach(item => {
                const item__ = req.body.items.find(item_ => { return item_.id === item.id });
                item.size = item__.size;
            });
        }

        return res.status(200).send(items).end();
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