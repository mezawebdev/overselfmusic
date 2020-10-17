const express = require("express");
const app = express();
const sgMail = require('@sendgrid/mail');
const env = require("../env.js");

app.get("/", (req, res, next) => {
    res.send("API root");
});

app.post("/send-email", (req, res, next) => {
    sgMail.setApiKey(env.sendGridApiKey);

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

    res.send();
});
// export the server middleware
module.exports = {
    path : '/api',
    handler : app
}