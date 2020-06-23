export default {
  state: {
    commands: []
  },
  mutations: {
    ADD_COMMAND(state, command) {
      state.commands.push(command);
    },
    CLEAR_COMMANDS(state) {
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