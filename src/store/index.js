import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import store from "../store";

const ls = new SecureLS({
    isCompression: false
});
Vue.use(Vuex)


import auth from "../modules/auth";
import filtros from "../modules/filtros";
import hotels from '../modules/hotels';
import bank from '../modules/bank';

const URL_API = process.env.NODE_ENV === 'development' ? 'http://localhost:3011' : 'https://colormaster.wbox.cloud';

export default new Vuex.Store({
    state: {
        url_web: process.env.NODE_ENV === 'development' ? 'http://localhost:3011' : 'https://colormaster.wbox.cloud',
        side: false,
        over: false,
        messages: [],
        page: false,

    },
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key)
        }
    })],
    mutations: {
        setSide(state, side) {
            state.side = side;
            console.log(side);
        },
        setOver(state, over) {
            state.over = over;
        },
        setPage(state, page) {
            state.page = page;
        },
        setMessages(state, message) {
            if (message === 'clear') {
                state.messages = [];
            } else {
                state.messages.push(message);
            }
        }
    },
    actions: {
        setSide({ commit }, side) {
            commit('setSide', side)
        },
        setOver({ commit }, over) {
            commit('setOver', over);
        },
        setPage({ commit }, page) {
            commit('setPage', page);
        },
        setMessages({ commit }, message) {
            commit('setMessages', message);
        },
        async requestFetch({ commit }, options) {
            const myHeaders = new Headers();

            myHeaders.append("Authorization", store.getters["auth/getToken"]);
            myHeaders.append("Content-Type", "application/json");


            const requestOptions = {
                method: options.method,
                mode: 'cors',
                headers: myHeaders,
                body: JSON.stringify(options.data) || null,
                redirect: 'follow'
            };

            try {
                const response = await fetch(`${URL_API}${options.path}`, requestOptions);
                const data = await response.json();

                if (data.error) throw data.error;
                return data;
            } catch (error) {
                console.log(error);
                return { error };
            }
        },
    },

    modules: {
        auth,
        filtros,
        hotels,
        bank
    },
    getters: {
        getSide(state) {
            return state.side
        },
        getOver(state) {
            return state.over;
        },
        getPage(state) {
            return state.page;
        },
        getMessages(state) {
            return state.messages;
        },
        getUrlWeb(state) {
            return state.url_web;
        },
    }
})