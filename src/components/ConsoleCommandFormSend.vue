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
          const URL = 'api/console.php';

          let successCallback = (json) => {
            this.$store.commit('ADD_COMMAND', {
              value: json.data.value,
              result: json.data.result
            });
          };

          this.submitPost(event.target, URL, successCallback);
        }
      }
    }
  };
</script>