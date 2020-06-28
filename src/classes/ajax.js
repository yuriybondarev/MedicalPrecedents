export default {
  ERROR_MESSAGE: 'Запрос был отклонён. Код ошибки: ',
  async post(formData, url, successCallback = () => {}) {
    let response = await fetch(url, {
      method: 'POST',
      body: formData
    });
    
    let json;
    
    if (response.ok) {
      json = await response.json();
      successCallback(json);
    } else {
      throw new Error(this.ERROR_MESSAGE + response.status);
    }

    return Promise.resolve(json.message);
  },
  async get(params, url, successCallback = () => {}) {
    let response = await fetch(url + '?' + params);
    
    let json;
    
    if (response.ok) {
      json = await response.json();
      successCallback(json);
    } else {
      throw new Error(this.ERROR_MESSAGE + response.status);
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