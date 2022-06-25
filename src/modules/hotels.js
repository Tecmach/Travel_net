import router from "../router";
import store from '../store';
export default {
    namespaced: true,
    state: {
        destiny2: {},
        zone: {},
        hotels: {},
        errors: [],
        results: {}
    },
    mutations: {
        setResults(state, results){
            state.results = results
        },
        setDestiny(state, destiny2) {
            state.destiny2 = destiny2
        },
        setErrors(state, error) {
            if (error == 'clear') {
                state.errors = [];
            } else {
                state.errors.push(error);
            }
        }

    },
    actions: {
        //SET RESULTS
        setResults({commit}, results){
            commit('setResults', results)

        },
        setDestiny({ commit }, destiny2) {
            commit('setDestiny', destiny2)
        },
        //SET ERRORS
        setErrors({ commit }, error) {
            commit('setErrors', error)
        },

        async destiny({ commit }, destiny2) {
            commit('setErrors', 'clear');

            console.log(destiny2);

            const response = await store.dispatch('requestFetch', { path: `/api/destiny/register`, method: 'POST', data: destiny2 });

            console.log(response);

            return response.destiny;
        },
        async destinations ({commit}){
            const response = await store.dispatch('requestFetch', {path: `/api/hotel/getDestinations/`, method: 'GET'});
            return response.response.destinations;
        },
        async quoterResults ({commit}, data){

            /* console.log(data); */
            const response = await store.dispatch('requestFetch', {path: `/api/hotel/getHotelBydestinations`, method: 'POST', data});
            /* console.log(response.response); */ /* 
            commit('setResults', response.response); */
            return response.response; 
        },

    },
    getters: {
        getDestiny(state) {
            return state.destiny2;
        },
        getErrors(state) {
            return state.errors;
        },
        getResults(state){
            return state.results;
        },
    }



}