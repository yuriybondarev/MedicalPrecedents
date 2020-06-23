<template>
  <BaseForm 
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
  </BaseForm>
</template>

<script>
  import BaseForm from './BaseForm';

  export default {
    components: {
      BaseForm
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

<style>
  #console-command-send-form {
    display: flex;
    width: 100%;
  }
  #console-command-send-form input {
    width: auto;
    flex-grow: 1;
  }
  #console-command-send-form button {
    width: 10%;
    margin: 0;
    margin-left: 12px;
  }
</style>