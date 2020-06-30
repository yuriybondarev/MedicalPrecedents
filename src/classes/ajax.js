export default {
  ERROR_MESSAGE: 'Запрос был отклонён. Код ошибки: ',

  async post(formData, url, successCallback = () => {}) {
    let response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    return this.__processResponse(response, successCallback);
  },
  
  async get(params, url, successCallback = () => {}) {
    let response = await fetch(url + '?' + params);

    return this.__processResponse(response, successCallback);
  },

  getParamsString(formData) {
    let pairs = [];

    for (let [key, value] of formData.entries()) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }

    return pairs.join('&');
  },

  async __processResponse(response, successCallback) {
    let json;
    
    if (response.ok) {
      json = await response.json();

      if (json.status) {
        successCallback(json);
      } else {
        throw new Error(json.message);
      }
    } else {
      throw new Error(this.ERROR_MESSAGE + response.status);
    }

    return Promise.resolve(json.message);
  }
};