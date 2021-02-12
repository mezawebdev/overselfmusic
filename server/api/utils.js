const Stripe = require("stripe")(process.env.SHOP_MODE === "test" ? process.env.STRIPE_SECRET_API_KEY_TEST : process.env.STRIPE_SECRET_API_KEY_LIVE),
    fs = require("fs"),
    { path } = require("app-root-path");

exports.createOrderEntry = async session => {
    // do things
    console.log("FULLFILLING ORDER!");
    console.log(session);
    await Order.create({
        stripeCheckoutSessionData: session
    });
}

exports.fulfillOrder = async session => {

}

exports.generateId = length => {
    let result = "",
        characters = "123456789",
        charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

exports.startCheckoutSession = async line_items => {
    const orderNumber = this.generateId(9);
    
    return await Stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        shipping_address_collection: {
            allowed_countries: ['US', 'CA'],
        },
        billing_address_collection: 'required',
        success_url: process.env.BASE_URL + "/shop/success?on=" + orderNumber,
        cancel_url: process.env.BASE_URL + "/shop/cart",
        client_reference_id: orderNumber
    });
}

exports.getStripeAPIKey = () => {
    if (process.env.SHOP_MODE === "test") {
        return process.env.STRIPE_SECRET_API_KEY_TEST;
    } else if (process.env.SHOP_MODE === "live") {
        return process.env.STRIPE_SECRET_API_KEY_LIVE;
    }
}

exports.getAllItems = async () => {
    let items = await Stripe.products.list(),
        prices = await Stripe.prices.list(),
        localProductDataJSON = JSON.parse(fs.readFileSync(`${ path }/storage/products.json`)),
        formatted = [];

    items.data = items.data.filter(item => { return item.active });

    prices.data = prices.data.filter(price => { return price.active });

    items.data.forEach(item => {
        if (item.active) {
            var localData = localProductDataJSON.find(product => { return product.id === item.id });
            console.log(localData);
            item.price = prices.data.find(price => { return price.id === localData.priceId });
            // console.log(item.name, {price: item.price});
            item.price.unit_amount = item.price.unit_amount / 100;
            item.metadata.sizes = typeof item.metadata.sizes === "string" ? JSON.parse(item.metadata.sizes) : [];
            item.metadata.shipping_cost = typeof item.metadata.shipping_cost === "string" ? JSON.parse(item.metadata.shipping_cost) : [];
            item.images = localData.images;
            item.sizeChart = localData.sizeChart || "";
            formatted.unshift(item);
            // console.log("\n");
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