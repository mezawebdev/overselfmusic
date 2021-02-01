import axios from "axios";
import OVERSELF from "../overself.config.js";

export const state = () => ({
    layout: "main",
    shows: [],
    backgroundLoading: true,
    background: {
        name: ""
    }
});

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        const { data } = await axios.get(`https://api.songkick.com/api/3.0/artists/${ process.env.SONGKICK_ARTIST_ID }/calendar.json?apikey=${ process.env.SONGKICK_API_KEY }`);
        commit("STORE_SHOWS", data.resultsPage.results.event);
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
    }
}

export const mutations = {
    SET_LAYOUT(state, layout) {
        state.layout = layout;
        console.log(state);
    },
    STORE_SHOWS(state, data) {
        state.shows = data;
    },
    SET_BACKGROUND(state, background) {
        state.background = background;
    },
    SET_BACKGROUND_LOADING(state, data) {
        state.backgroundLoading = data;
    }
}

export const getters = {
    layout(state) {
        return state.layout;
    },
    shows(state) {
        return state.shows;
    },
    background(state) {
        return state.background;
    },
    backgroundLoading(state) {
        return state.backgroundLoading;
    }
}