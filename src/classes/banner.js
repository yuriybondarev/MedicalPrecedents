import $store from '../store';

export default {
  BANNER_ERROR: 0,
  BANNER_SUCCESS: 1,
  DELAY: 5000,
  showBanner(message, bannerId) {
    $store.commit('SWITCH_BANNER', bannerId);
    $store.commit('SET_BANNER_MESSAGE', message);

    setTimeout(() => {
      $store.commit('SWITCH_BANNER', null);
    }, this.DELAY);
  }
};