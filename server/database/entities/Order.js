const { Order: OrderModel } = require("../models"),
    axios = require("axios"),
    PrintfulAPI = require("../apis/PrintfulAPI"),
    StripeAPI = require("../apis/StripeAPI"),
    Mail = require("../../modules/Mail");

module.exports = class Order {
    constructor(orderNumber, isNew = false) {
        this.data = { 
            orderNumber,
            stripeCheckoutSessionData: {},
            printfulOrderData: {},
            products: []
        };

        this.isNew = isNew;
    }

    async save() {
        if (this.isNew) {
            const newOrder = await OrderModel.create({ ...this.data });
            this.data = newOrder.dataValues;
        } else {
            const existingOrder = await OrderModel.findOne({ where: { id: this.data.id } });
            await existingOrder.update({ ...this.data });
        }
    }

    async fulfill() {
        if (this.isNew) {
            this.isNew = false;
            
            const shippingInformation = this.data.stripeCheckoutSessionData.shipping,
                productsOrdered = await StripeAPI.getCheckoutSessionItems(this.data.stripeCheckoutSessionData.id),
                allPrintfulProducts = await PrintfulAPI.get("/store/products"),
                productsToBeFulfilled = [];

            this.data.products = productsOrdered.data;

            await this.save();

            for (let i = 0; i < this.data.products.length; i++) {
                if (this.data.products[i].description !== "Shipping") {
                    var name = this.data.products[i].description.split(",")[0],
                        size = this.data.products[i].description.split("Size: ")[1].split(",")[0],
                        color = this.data.products[i].description.split("Color: ")[1],
                        quantity = this.data.products[i].quantity,
                        printfulProduct = allPrintfulProducts.data.result.find(product => { return product.name === name }),
                        fullProductInformation = await PrintfulAPI.get("/store/products/" + printfulProduct.id),
                        productVariants = fullProductInformation.data.result.sync_variants,
                        currentProductVariant = productVariants.find(variant => { return variant.name.split(" - ")[1] === this.getSizeCode(size) });

                    productsToBeFulfilled.push({
                        sync_variant_id: currentProductVariant.id,
                        quantity
                    });
                }
            }

            // PLACING NEW PRINTFUL ORDER
            const orderRequest = await PrintfulAPI.post("/orders", {
                recipient: {
                    name: shippingInformation.name,
                    address1: shippingInformation.address.line1,
                    address2: shippingInformation.address.line2,
                    city: shippingInformation.address.city,
                    zip: shippingInformation.address.postal_code,
                    country_code: shippingInformation.address.country,
                    state_code: shippingInformation.address.state
                },
                items: productsToBeFulfilled
            });

            this.data.printfulOrderData = orderRequest.data.result;

            await this.save();

            const mail = new Mail(
                this.data.stripeCheckoutSessionData.customer_details.email, 
                "🖤 Overself Web Store <band@overselfmusic.com>",
                `<div style="letter-spacing: 1px; font-weight: 200; font-family: Helvetica, sans-serif; color: rgb(10, 10, 10); display: flex; justify-content: center; padding: 15px; width: 100%; height: 100%; background-color: rgb(50, 50, 50);">
                    <div style="max-width: 415px; padding: 15px; background: rgb(247, 247, 247); border-radius: 5px; border: 1px solid rgb(100, 100, 100);">
                        <img style="display: block; margin: 0 auto; width: 300px; filter: invert(100%);" src="https://overselfmusic.com/assets/images/Logo-Black.png" />
                        <h1 style="text-align: center;">YOU ARE AMAZING! <span style="font-size: 2em; color: red;">♥</span></h1>
                        <hr />
                        <p style="font-size: 1.25em">Thank you so much for your purchase, we really appreciate you!</p>
                        <p style="font-size: 1.25em">You ordered the following items:</p>
                        <div style="font-size: 0.9em;">
                            <ul>${ this.getProductsHTML(this.data.products.filter(product => { return product.description !== "Shipping" })) }</ul>
                        </div>
                        <p>Your total was: <strong>$${ this.data.stripeCheckoutSessionData.amount_total / 100 }</strong> (Including Shipping)</p>
                        <p>Your Order Number is <strong style="color:#4BB543;">${ this.data.orderNumber }</strong></p>
                        <p>Questions? send us a message over on our <a href="https://overselfmusic.com/contact" target="_blank">Contact Page</p>.
                        <p>And again, thank you!!</p>
                        <p>- Overself</p>
                    </div>
                </div>`,
                "📦 Order Confirmation from OverselfMusic.com"
            );

            await mail.send();
        }
    }

    getProductsHTML(products) {
        let str = "";

        products.forEach(product => {
            str += `<li style="padding: 5px;">${ product.description }, Quantity: ${ product.quantity }, Price: $${ product.price.unit_amount / 100 }/each</li>`
        });

        return str;
    }

    async fetch() {
        const req = await OrderModel.findOne({ where: { orderNumber: this.data.orderNumber } });
        if (req === undefined) throw new Error();
        this.data = { ...req.dataValues };
    }

    getSizeCode(sizeName) {
        switch (sizeName) {
            case "Small":
                return "S";
            break;
            case "Medium":
                return "M";
            break;
            case "Large":
                return "L";
            break;
            case "XLarge":
                return "XL";
            break;
        }
    }

    generateId(length) {
        let result = "",
            characters = "123456789",
            charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}