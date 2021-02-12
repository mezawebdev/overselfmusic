const sgMail = require('@sendgrid/mail');

module.exports = class Mail {
    constructor(to, from, html, subject) {
        this.to = to;
        this.from = from;
        this.html = html;
        this.subject = subject;
    }

    async send() {
        console.log(process.env.SENDGRID_API_KEY);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        sgMail.send({
            to: this.to,
            from: this.from,
            subject: this.subject,
            html: this.html
        });
    }
}