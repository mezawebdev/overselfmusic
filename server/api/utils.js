const Stripe = require("stripe")(process.env.SHOP_MODE === "test" ? process.env.STRIPE_SECRET_API_KEY_TEST : process.env.STRIPE_SECRET_API_KEY_LIVE),
    fs = require("fs"),
    { path } = require("app-root-path");

exports.getStripeAPIKey = () => {
    if (process.env.SHOP_MODE === "test") {
        return process.env.STRIPE_SECRET_API_KEY_TEST;
    } else if (process.env.SHOP_MODE === "live") {
        return process.env.STRIPE_SECRET_API_KEY_LIVE;
    }
}

exports.getAllItems = async () => {
    const items = await Stripe.products.list(),
        prices = await Stripe.prices.list(),
        localProductDataJSON = JSON.parse(fs.readFileSync(`${ path }/storage/products.json`)),
        formatted = [];

    items.data.forEach(item => {
        if (item.active) {
            var localData = localProductDataJSON.find(product => { return product.id === item.id });
            item.price = prices.data.find(price => { return price.product === item.id });
            item.price.unit_amount = item.price.unit_amount / 100;
            item.metadata.sizes = typeof item.metadata.sizes === "string" ? JSON.parse(item.metadata.sizes) : [];
            item.images = localData.images;
            // console.log(item);
            formatted.push(item);
        }
    });

    return formatted;
}

exports.getItemsByIds = async ids => {
    const items = await this.getAllItems(),
        stripeItems = [];

    ids.forEach(id => {
        items.forEach(stripeItem => {
            if (stripeItem.id === id) {
                stripeItems.push(stripeItem);
            }
        });
    });

    return stripeItems.length === 0 ? stripeItems[0] : stripeItems;
}