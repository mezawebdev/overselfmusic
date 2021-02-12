import OVERSELF from "../overself.config.js";

export const state = () => ({
    layout: "main",
    shows: [],
    backgroundLoading: true,
    background: {
        name: ""
    },
    stripePublicAPIKeyTest: "",
    loadingOverlay: false,
    spotlight: false,
    spotlightImages: [],
    spotlightIndex: null
});

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        // console.log(process.env.STRIPE_PUBLIC_API_KEY_TEST);
        // const { data } = await axios.get(`https://api.songkick.com/api/3.0/artists/${ process.env.SONGKICK_ARTIST_ID }/calendar.json?apikey=${ process.env.SONGKICK_API_KEY }`);
        // commit("STORE_SHOWS", data.resultsPage.results.event);
        commit("STRIPE_PUBLIC_API_KEY", process.env.SHOP_MODE === "live" ? process.env.STRIPE_PUBLIC_API_KEY_LIVE : process.env.STRIPE_PUBLIC_API_KEY_TEST);
    },
    setBackground({ commit, state }, background) {
        let newBg = OVERSELF.global.backgrounds.find(bg => { return bg.name === background });

        if (newBg.name !== state.background.name) {
            commit("SET_BACKGROUND_LOADING", true);
            commit("SET_BACKGROUND", newBg);
            setTimeout(() => {
                commit("SET_BACKGROUND_LOADING", false);
            }, 250);
        }
    },
    setBackgroundLoading({ commit }, data) {
        commit("SET_BACKGROUND_LOADING", data);
    },
    setLayout({ commit }, data) {
        commit("SET_LAYOUT", data);
    },
    showLoadingOverlay({ commit }) {
        commit("SHOW_LOADING_OVERLAY");
    },
    hideLoadingOverlay({ commit }) {
        commit("HIDE_LOADING_OVERLAY");
    },
    showSpotlight({ commit }, images) {
        commit("SET_SPOTLIGHT_INDEX", images.startingIndex);
        commit("SHOW_SPOTLIGHT", images.items);
    },
    hideSpotlight({ commit }) {
        // if (images.startingIndex === "number") commit("SET_SPOTLIGHT_INDEX", images.startingIndex);
        commit("HIDE_SPOTLIGHT");
    },
    setSpotlightIndex({ commit }, i) {
        commit("SET_SPOTLIGHT_INDEX", i);
    }
}

export const mutations = {
    SHOW_SPOTLIGHT(state, images) {
        state.spotlightImages = images;
        state.spotlight = true;
    },
    HIDE_SPOTLIGHT(state) {
        state.spotlight = false;
        state.spotlightImages = [];
        state.spotlightIndex = null;
    },
    SET_SPOTLIGHT_INDEX(state, i) {
        state.spotlightIndex = i;
    },
    STRIPE_PUBLIC_API_KEY(state, key) {
        state.stripePublicAPIKeyTest = key;
    },
    SET_LAYOUT(state, layout) {
        state.layout = layout;
    },
    STORE_SHOWS(state, data) {
        state.shows = data;
    },
    SET_BACKGROUND(state, background) {
        state.background = background;
    },
    SET_BACKGROUND_LOADING(state, data) {
        state.backgroundLoading = data;
    },
    SHOW_LOADING_OVERLAY(state) {
        state.loadingOverlay = true;
    },
    HIDE_LOADING_OVERLAY(state) {
        state.loadingOverlay = false;
    }
}

export const getters = {
    layout(state) { return state.layout },
    shows(state) { return state.shows },
    background(state) { return state.background },
    backgroundLoading(state) { return state.backgroundLoading },
    stripePublicAPIKey(state) { return state.stripePublicAPIKeyTest },
    loadingOverlay(state) { return state.loadingOverlay },
    spotlight(state) { return state.spotlight },
    spotlightImages(state) { return state.spotlightImages },
    spotlightIndex(state) { return state.spotlightIndex }
}