import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      playerUrl: null
    },

    mutations: {
      SET_URL: (state, payload) => {
        state.playerUrl = payload;
      }
    },

    actions: {
      setPlayerUrl({ commit, state }, payload) {
        commit('SET_URL', payload);
      }
    },

    getters: {
      getPlayerUrl(state) {
        return state.playerUrl;
      }
    }
  })
};

export default createStore
