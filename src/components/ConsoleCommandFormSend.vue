<template>
  <BaseFormFlex
    id="console-command-send-form" 
    @submit.prevent="submit"
  >
    <input 
      v-model="command" 
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
    data() {
      return {
        command: null,
      };
    },
    methods: {
      submit() {
        let commandObject = {
          value: this.command,
          result: 'Команда успешно выполнена'
        };

        this.$store.commit('ADD_COMMAND', commandObject);
      }
    }
  };
</script>