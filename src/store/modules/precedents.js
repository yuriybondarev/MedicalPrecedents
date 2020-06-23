export default {
  state: {
    precedents: []
  },
  mutations: {
    ADD_PRECEDENT(state, precedent) {
      state.precedents.push(precedent);
    },
    CLEAR_PRECEDENTS(state) {
      while(state.precedents.length) {
        state.precedents.pop();
      }
    }
  },
  actions: {
    //TODO
  },
  getters: {
    precedents: (state) => state.precedents
  }
}