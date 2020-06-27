export default {
  async post(formData, url, successCallback = () => {}) {
    let json;

    try {
      let response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      json = await response.json();

      successCallback(json);
    } catch (error) {
      throw new Error(error);
    }

    return Promise.resolve(json.message);
  },
  async get(params, url, successCallback = () => {}) {
    let json;

    try {
      let response = await fetch(url + '?' + params);
      
      json = await response.json();

      successCallback(json);
    } catch (error) {
      throw new Error(error);
    }

    return Promise.resolve(json.message);
  },
  getParamsString(formData) {
    let pairs = [];

    for (let [key, value] of formData.entries()) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }

    return pairs.join('&');
  }
};