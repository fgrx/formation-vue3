export default {
  state: {
    ressources: [],
  },
  getters: {
    getValidRessources: (state) => {
      return state.ressources.filter((ressource) => ressource.isValid);
    },
    getNotValidRessources: (state) => {
      return state.ressources.filter((ressource) => !ressource.isValid);
    },
  },
  mutations: {
    updateRessources(state, ressources) {
      state.ressources = ressources;
    },
    addRessource(state, ressource) {
      state.ressources.unshift(ressource);
    },
    deleteRessource(state, ressourceToDelete) {
      state.ressources = state.ressources.filter(
        (ressource) => ressource.id !== ressourceToDelete.id
      );
    },
    updateRessource(state, ressourceUpdated) {
      const index = state.ressources.findIndex(
        (ressource) => ressourceUpdated.id === ressource.id
      );
      state.ressources[index] = ressourceUpdated;
    },
  },
  actions: {
    updateRessourcesAction({ commit }, ressources) {
      commit("updateRessources", ressources);
    },
    addRessourceAction({ commit }, ressource) {
      commit("addRessource", ressource);
    },
    updateRessourceAction({ commit }, ressource) {
      commit("updateRessource", ressource);
    },
    deleteRessourceAction({ commit }, ressource) {
      commit("deleteRessource", ressource);
    },
  },
};
