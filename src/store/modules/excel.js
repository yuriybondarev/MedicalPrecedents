export default {
  state: {
    headers: [],
    values: []
  },
  mutations: {
    UPDATE_HEADERS(state, headers) {
      state.headers = headers;
    },
    UPDATE_VALUES(state, values) {
      state.values = values;
    },
    CLEAR_EXCEL(state) {
      while(state.headers.length !== 0) {
        state.headers.pop();
        state.values.pop();
      }
    }
  },
  getters: {
    headers: (state) => state.headers,
    values: (state) => state.values
  }
};