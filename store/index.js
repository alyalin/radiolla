import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      playerUrl: null,
      currentPlaying: null,
      playlistIsPlaying: false,
    },

    mutations: {
      SET_URL: (state, payload) => {
        state.playerUrl = payload;
      },

      SET_CURRENT_PLAYING: (state, payload) => {
        state.currentPlaying = payload;
      },

      SET_IS_PLAYING: (state, payload) => {
        state.playlistIsPlaying = payload;
      }
    },

    actions: {
      setPlayerUrl({ commit, state }, payload) {
        commit('SET_URL', payload);
      },

      setCurrentPlaying({ commit, state }, payload) {
        commit('SET_CURRENT_PLAYING', payload);
      },

      setIsPlaying({ commit, state }, payload) {
        commit('SET_IS_PLAYING', payload);
      }
    },

    getters: {
      getPlayerUrl(state) {
        return state.playerUrl;
      },

      getCurrentPlaying(state) {
        return state.currentPlaying;
      },

      getIsPlaying(state) {
        return state.playlistIsPlaying;
      }
    }
  })
};

export default createStore
