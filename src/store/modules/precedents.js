export default {
  state: {
    precedents: []
  },
  mutations: {
    ADD_PRECEDENT(state, precedent) {
      state.precedents.push(precedent);
    },
    ADD_PRECEDENTS(state, precedents) {
      for (let precedent of precedents) {
        state.precedents.push(precedent);
      }
    },
    CLEAR_PRECEDENTS(state) {
      while(state.precedents.length) {
        state.precedents.pop();
      }
    }
  },
  getters: {
    precedents: (state) => state.precedents
  }
}