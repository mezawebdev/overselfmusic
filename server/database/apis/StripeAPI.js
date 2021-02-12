const Stripe = require("stripe")(process.env.SHOP_MODE === "test" ? process.env.STRIPE_SECRET_API_KEY_TEST : process.env.STRIPE_SECRET_API_KEY_LIVE);

module.exports = class StripeAPI {
    static async getCheckoutSessionItems(sessionId) {
        return await Stripe.checkout.sessions.listLineItems(sessionId, { limit: 100 });
    }
}