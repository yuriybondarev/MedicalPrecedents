import Banner from './banner';

export default {
  async post(formData, url, successCallback = () => {}) {
    try {
      let response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      let jsonResponse = await response.json();

      Banner.showBanner(jsonResponse.message, Banner.BANNER_SUCCESS);

      successCallback(jsonResponse);
    } catch (error) {
      Banner.showBanner(error, Banner.BANNER_ERROR);
    }
  },
  async get(params, url, successCallback = () => {}) {
    try {
      let response = await fetch(url + params);
      
      let jsonResponse = await response.json();

      Banner.showBanner(jsonResponse.message, Banner.BANNER_SUCCESS);

      successCallback(jsonResponse);
    } catch (error) {
      Banner.showBanner(error, Banner.BANNER_ERROR);
    }
  },
  getQueryString(formData) {
    let pairs = [];

    for (let [key, value] of formData.entries()) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }

    return '?' + pairs.join('&');
  }
};