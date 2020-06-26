export default {
  state: {
    bannerType: null,
    bannerMessage: null
  },
  mutations: {
    SWITCH_BANNER(state, bannerType) {
      state.bannerType = bannerType;
    },
    SET_BANNER_MESSAGE(state, bannerMessage) {
      state.bannerMessage = bannerMessage;
    }
  },
  getters: {
    bannerType: (state) => state.bannerType,
    bannerMessage: (state) => state.bannerMessage,
    isBannerActive: (state) => (state.bannerType === null) ? false : true
  }
};