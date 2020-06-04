export default {
  namespaced: true,
  state: {
    commands: []
  },
  mutations: {
    addCommand: (state, command) => {
      state.commands.push(command);
    }
  },
  actions: {
    //TODO
  },
  getters: {
    commands: (state) => {
      return state.commands;
    }
  }
}