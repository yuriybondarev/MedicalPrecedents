<template>
  <form-model id="console-command-form" @submit="submitConsole">
    <input v-model="consoleCommand" name="console-command" placeholder="Введите запрос" />
    <button><fa-icon icon="arrow-right"/></button>
  </form-model>
</template>

<script>
  import FormModel from '../models/Form';

  export default {
    data() {
      return {
        consoleCommand: null,
      };
    },
    methods: {
      submitConsole() {
        let command = {
          value: this.consoleCommand,
          result: 'Команда успешно выполнена'
        };

        this.$store.commit('console/addCommand', command);
      }
    },
    components: {
      FormModel
    }
  };
</script>

<style>
  #console-command-form {
    display: flex;
    width: 100%;
  }

  #console-command-form input {
    width: auto;
    flex-grow: 1;
  }

  #console-command-form button {
    width: 10%;
    margin: 0;
    margin-left: 12px;
  }
</style>