import router from "../router";
import store from '../store';

export default {
    namespaced: true,
    state: {
        user: {},
        token: '',
        errors: []
    }, 
    mutations: {
        setUser (state, user){
            state.user = user
        },
        setToken (state, token){
            state.token = token;
        },
        setErrors(state, error){
            if (error == 'clear') {
                state.errors = [];
            } else {
                state.errors.push(error);
            }
        }
    },
    actions: {
        //SET ERRORS
        setUser({commit}, user) {
            commit('setUser', user)
        },
        //SET ERRORS
        setToken({commit}, token) {
            commit('setToken', token)
        },
        //SET ERRORS
        setErrors({commit}, error) {
            commit('setErrors', error)
        },
        // GET USERS
        async getUsers({ commit }) {
            commit('setErrors', 'clear');
            const response = await store.dispatch('requestFetch', {path: `/api/auth/users`, method: 'GET'});
            return response.users;
        },

        // LOGIN
        async signin({ commit }, user) {
            commit('setErrors', 'clear');
            const response = await store.dispatch('requestFetch', {path: `/api/auth/login`, method: 'POST', data: user});
            if(response.error) return commit('setErrors', response.error);


            commit('setUser', response.user);
            commit('setToken', 'Bearer ' + response.access_token);


            return router.push('/');


        },

        // VERYFY TOKEN
        async userme({ commit }) {
            let response;
            if(!store.getters["auth/getToken"]){
                commit('setUser', undefined);
            }else{
                response = await store.dispatch('requestFetch', {path: `/api/user/me`, method: 'GET'});
                if(response.error) {
                    commit('setUser', undefined);
                    commit('setToken', undefined);
                }
                commit('setUser', response.user);
            }

            return response;

        }, 

        //LOG OUT
        async logout({ commit }) {
            const response = await store.dispatch('requestFetch', {path: `/api/auth/logout`, method: 'GET'});

            await router.push('/login');
        },

    },
    getters: {
        getUser(state){
            return state.user;
        },
        getToken(state){
            return state.token;
        },
        getErrors(state){
            return state.errors;
        }
    }

}