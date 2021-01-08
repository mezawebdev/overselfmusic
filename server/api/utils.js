exports.getStripeAPIKey = () => {
    if (process.env.SHOP_MODE === "test") {
        return process.env.STRIPE_SECRET_API_KEY_TEST;
    } else if (process.env.SHOP_MODE === "live") {
        return process.env.STRIPE_SECRET_API_KEY_LIVE;
    }
}