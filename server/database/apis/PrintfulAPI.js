const axios = require("axios");

module.exports = class PrintfulAPI {
    static async get(route) {
        return await axios.get(process.env.PRINTFUL_API_URL + route, {
            headers: {
                authorization: "Basic " + process.env.PRINTFUL_API_KEY_BASE64
            }
        });
    }

    static async post(route, data) {
        return await axios.post(process.env.PRINTFUL_API_URL + route, data, {
            headers: {
                authorization: "Basic " + process.env.PRINTFUL_API_KEY_BASE64
            }
        });
    }

    static async getAllProducts() {
        const products = await PrintfulAPI.get("/store/products");
        return products.data.result;
    }

    static async getEstimatedCosts(products) {
        const allProducts = await PrintfulAPI.getAllProducts(),
            estimatedCostsReq = await PrintfulAPI.post("/orders/estimate-costs", {
                items: allProducts.map(product => { return { id: product.id } })
            });

        console.log(estimatedCostsReq);
        
        return {};
    }
}