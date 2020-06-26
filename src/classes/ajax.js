export default {
  async post(formData, url, successCallback = () => {}) {
    let promise;

    try {
      let response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      let jsonResponse = await response.json();

      successCallback(jsonResponse);

      promise = Promise.resolve(jsonResponse.message);
    } catch (error) {
      promise = Promise.reject(error);
    }

    return promise;
  },
  async get(params, url, successCallback = () => {}) {
    let promise;

    try {
      let response = await fetch(url + params);
      
      let jsonResponse = await response.json();

      successCallback(jsonResponse);

      promise = Promise.resolve(jsonResponse.message);
    } catch (error) {
      promise = Promise.reject(error);
    }

    return promise;
  },
  getQueryString(formData) {
    let pairs = [];

    for (let [key, value] of formData.entries()) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }

    return '?' + pairs.join('&');
  }
};