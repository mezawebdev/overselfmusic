export const state = () => ({
    cart: {
        items: []
    }
});

export const actions = {
    addItemToCart({ commit }, payload) {
        commit("ADD_ITEM_TO_CART", payload);
    },
    updateItem({ commit }, payload) {
        commit("UPDATE_ITEM", payload);
    }
}

export const mutations = {
    ADD_ITEM_TO_CART(state, payload) {
        let isInCart = false; 

        console.log("item", payload)

        state.cart.items.forEach(item => {
            if (item.productId === payload.productId && item.size === payload.size) {
                isInCart = true;
                item.quantity++;
            }
        });

        if (!isInCart) state.cart.items.push(payload);
    },
    UPDATE_ITEM(state, payload) {
        const item = state.cart.items.find(it => { return it.productId === payload.id });
        item.quantity = parseInt(payload.quantity);
    }
}

export const getters = {
    cart(state) {
        return state.cart;
    },
    subtotal(state) {
        let price = 0;
        state.cart.items.forEach(item => { price += item.price * item.quantity });
        price = parseFloat(price).toFixed(2);
        return price;
    },
    itemsAmount(state) {
        let amount = 0

        state.cart.items.forEach(item => {
            amount += 1 * item.quantity;
        });

        return amount;
    }
}