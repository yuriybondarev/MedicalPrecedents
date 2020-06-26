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
  import AJAX from '@/classes/ajax';

  export default {
    components: {
      BaseFormFlex
    },
    methods: {
      submit(event) {
        if (!this.$store.getters.isBannerActive) {
          const URL = 'post.php';

          AJAX.post(new FormData(event.target), URL, (jsonResponse) => {
            let commandObject = {
              value: 'SELECT * FROM precedents',
              result: 'Команда успешно выполнена',
              jsonResponse
            };

            this.$store.commit('ADD_COMMAND', commandObject);
          });
        }
      }
    }
  };
</script>