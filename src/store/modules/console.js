export default {
  namespaced: true,
  state: {
    commands: []
  },
  mutations: {
    addCommand(state, command) {
      state.commands.push(command);
    },
    clearCommands(state) {
      while(state.commands.length) {
        state.commands.pop();
      }
    }
  },
  actions: {
    //TODO
  },
  getters: {
    commands: (state) => state.commands
  }
}