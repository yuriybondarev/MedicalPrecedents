<template>
  <BaseFormFlex
    id="console-command-send-form" 
    @submit.prevent="submit"
  >
    <input
      name="console-command" 
      placeholder="Введите запрос" 
    />
    <button>
      <fa-icon icon="arrow-right"/>
    </button>
  </BaseFormFlex>
</template>

<script>
  import BaseFormFlex from './BaseFormFlex';

  export default {
    components: {
      BaseFormFlex
    },
    extends: BaseFormFlex,
    methods: {
      submit(event) {
        if (!this.isBlocked) {
          const URL = 'post.php';

          let successCallback = (jsonResponse) => {
            this.$store.commit('ADD_COMMAND', {
              value: 'SELECT * FROM precedents',
              result: 'Команда успешно выполнена',
              jsonResponse
            });
          };

          this.submitPost(event.target, URL, successCallback);
        }
      }
    }
  };
</script>