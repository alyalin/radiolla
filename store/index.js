export const state = () => ({
  playerUrl: null,
  currentPlaying: null,
  playlistIsPlaying: false,
})

export const mutations = {
  SET_URL: (state, payload) => {
    state.playerUrl = payload;
  },

  SET_CURRENT_PLAYING: (state, payload) => {
    state.currentPlaying = payload;
  },

  SET_IS_PLAYING: (state, payload) => {
    state.playlistIsPlaying = payload;
  }
}

export const actions = {
  setPlayerUrl({ commit, state }, payload) {
    commit('SET_URL', payload);
  },

  setCurrentPlaying({ commit, state }, payload) {
    commit('SET_CURRENT_PLAYING', payload);
  },

  setIsPlaying({ commit, state }, payload) {
    commit('SET_IS_PLAYING', payload);
  }
}

export const getters = {
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