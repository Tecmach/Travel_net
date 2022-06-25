import store from '../store';

export default {
    namespaced: true,
    state: {
        showFilters: true
    },
    mutations: {
        setShowFilters(state, value) {
            state.showFilters = value
        }
    },
    actions: {
        setShowFilters({ commit }, value) {
            commit('setShowFilters', value)
        }
    },
    getters: {
        getShowFilters(state) {
            return state.showFilters;
        }
    }

}