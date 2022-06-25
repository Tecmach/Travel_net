import router from "../router";
import store from '../store';
export default {
    namespaced: true,
    state: {
        bank: {},
        zone: {},
        hotels: {},
        errors: []
    },
    mutations: {
        setBank(state, bank) {
            state.bank = bank
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
        setBank({ commit }, bank) {
            commit('setBank', bank)
        },
        //SET ERRORS
        setErrors({ commit }, error) {
            commit('setErrors', error)
        },

        async banks({ commit }, bank) {
            commit('setErrors', 'clear');


            console.log(bank);


            const response = await store.dispatch('requestFetch', { path: `/api/bank/register`, method: 'POST', data: bank });

            console.log(response);

            return response.banks;
        }
    },
    getters: {
        getBank(state) {
            return state.bank;
        },
        getErrors(state) {
            return state.errors;
        }
    }



}