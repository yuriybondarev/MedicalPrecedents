export default {
  namespaced: true,
  state: {
    precedents: []
  },
  mutations: {
    addPrecedent: (state, precedent) => {
      state.precedents.push(precedent);
    },
    clearPrecedents: (state) => {
      while(state.precedents.length) {
        state.precedents.pop();
      }
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