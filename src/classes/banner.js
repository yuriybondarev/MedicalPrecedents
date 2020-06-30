import $store from '../store';

export default {
  BANNER_ERROR: 0,
  BANNER_SUCCESS: 1,
  DELAY: 3000,
  
  show(message, bannerId) {
    return new Promise((resolve) => {
      $store.commit('SWITCH_BANNER', bannerId);
      $store.commit('SET_BANNER_MESSAGE', message);

      setTimeout(() => {
        $store.commit('SWITCH_BANNER', null);
        resolve();
      }, this.DELAY);
    });
  }
};