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
    },
    overrideCart({ commit }, payload) {
        commit("OVERRIDE_CART", payload);
    },
    removeItem({ commit }, payload) {
        commit("REMOVE_ITEM", payload);
    }
}

export const mutations = {
    ADD_ITEM_TO_CART(state, payload) {
        let isInCart = false; 

        state.cart.items.forEach(item => {
            if (item.productId === payload.productId && item.size === payload.size) {
                isInCart = true;
                item.quantity++;
            }
        });

        if (!isInCart) state.cart.items.push(payload);

        document.cookie = "cart=" + JSON.stringify(state.cart) + ";";
    },
    UPDATE_ITEM(state, payload) {
        const item = state.cart.items.find(it => { return it.productId === payload.id });
        item.quantity = parseInt(payload.quantity);
        document.cookie = "cart=" + JSON.stringify(state.cart) + ";";
    },
    OVERRIDE_CART(state, payload) {
        state.cart = payload;
    },
    REMOVE_ITEM(state, payload) {
        for (let i = 0; i < state.cart.items.length; i++) {
            // console.log(state.cart.items[i].productId, payload.id);
            if (state.cart.items[i].productId === payload.id) state.cart.items.splice(i, 1);
        }
        
        document.cookie = "cart=" + JSON.stringify(state.cart) + ";";
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