export default {
  namespaced: true,
  state: {
    precedents: []
  },
  mutations: {
    addPrecedent: (state, precedent) => {
      state.commands.push(precedent);
    }
  },
  actions: {
    //TODO
  },
  getters: {
    precedents: (state) => {
      return state.precedents;
    }
  }
}