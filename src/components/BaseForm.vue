<template>
  <form 
    class="form-model basic-wrapper"
    v-on="$listeners"
  >
    <slot></slot>
  </form>
</template>

<script>
  import AJAX from '@/classes/ajax';
  import Banner from '@/classes/banner';

  export default {
    data() {
      return {
        isBlocked: false
      }
    },
    methods: {
      submitPost(form, url, successCallback = () => {}) {
        this.isBlocked = true;

        let bannerType;
        let bannerMessage;

        AJAX.post(new FormData(form), url, successCallback)
            .then((message) => {
              bannerType = Banner.BANNER_SUCCESS;
              bannerMessage = message;
            })
            .catch((error) => {
              bannerType = Banner.BANNER_ERROR;
              bannerMessage = error;
            })
            .finally(async () => {
              await Banner.show(bannerMessage, bannerType);
              this.isBlocked = false;
            });
      },
      submitGet(params, url, successCallback = () => {}) {
        this.isBlocked = true;

        let bannerType;
        let bannerMessage;
        
        AJAX.get(params, url, successCallback)
            .then((message) => {
              bannerType = Banner.BANNER_SUCCESS;
              bannerMessage = message;
            })
            .catch((error) => {
              bannerType = Banner.BANNER_ERROR;
              bannerMessage = error;
            })
            .finally(async () => {
              await Banner.show(bannerMessage, bannerType);
              this.isBlocked = false;
            });
      }
    }
  };
</script>

<style>
  .form-model input, .form-model select, .form-model button {
    font-size: 1em;
  }

  .form-model input[type="file"] {
    cursor: pointer;
  }

  .form-model input:not(.not-block-input), .form-model button, .form-model select {
    display: block;
    width: 100%;
    border: none;
    padding: 8px;
    border-radius: 4px;
  }

  .form-model input, .form-model select {
    background-color: #eee;
    color: #2b2b2b;
  }

  .form-model input[type="radio"], .form-model input[type="checkbox"] {
    margin-right: 6px;
  }

  .form-model button {
    text-transform: uppercase;
    color: #eee;
    background-color: #2b9884;
    padding: 10px;
    margin-top: 24px;
  }

  .form-model .min-max-wrapper {
    display: flex;
  }

  .form-model .min-max-wrapper input:not(:last-child) {
    margin-right: 12px;
  }

  .form-model label:not(.not-block-label) {
    display: block;
    margin-bottom: 8px;
  }

  .form-model > div div:not(:last-child), .form-model select {
    margin-bottom: 16px;
  }
</style>