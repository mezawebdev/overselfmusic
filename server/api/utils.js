const Stripe = require("stripe")(process.env.SHOP_MODE === "test" ? process.env.STRIPE_SECRET_API_KEY_TEST : process.env.STRIPE_SECRET_API_KEY_LIVE),
    fs = require("fs"),
    { path } = require("app-root-path");


const productData = [
    {
        "id": "prod_IvjZxdJNrTMM2K",
        "priceId": "price_1IJs6fBlBE7zOQ5mmWDIWjB4",
        "name": "Overself Tee",
        "images": [
            "overself-tee-1.png",
            "overself-tee-2.jpg",
            "overself-tee-3.jpg"
        ],
        "sizeChart": "gildan-tee-size-guide.png"
    },
    {
        "id": "prod_IvjagylYrAqDjq",
        "priceId": "price_1IJyU6BlBE7zOQ5m5MFJd7EN",
        "name": "Yogi Hoodie",
        "images": [
            "yogi-hoodie-3.png",
            "yogi-hoodie-4.jpg",
            "yogi-hoodie-1.png",
            "yogi-hoodie-2.jpg",
            "yogi-hoodie-5.jpg"
        ],
        "sizeChart": "american-apparel-hoodie-size-guide.png"
    },
    {
        "id": "prod_IvjaSA7fPKnwqQ",
        "priceId": "price_1IJs6wBlBE7zOQ5mnJEZqDJb",
        "name": "Astronaut Tee",
        "images": [
            "astronaut-tee-1.png",
            "astronaut-tee-2.jpg",
            "astronaut-tee-3.jpg"
        ],
        "sizeChart": "gildan-tee-size-guide.png"
    },
    {
        "id": "prod_IvjaEY8gSKVb6O",
        "priceId": "price_1IJyKfBlBE7zOQ5mUpjEUxkS",
        "name": "Overself 5-Panel Cap",
        "images": [
            "overself-5-panel-cap-1.png",
            "overself-5-panel-cap-2.jpg"
        ]
    }
];

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
        localProductDataJSON = productData,
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