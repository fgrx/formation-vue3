export default {
  state: {
    user: {},
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    updateUserAction({ commit }, payload) {
      commit("updateUser", payload);
    },
  },
};
