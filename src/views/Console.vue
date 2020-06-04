<template>
  <div id="console-wrapper">
    <console-monitor/>
    <console-command-form class="form-model"/>
  </div>
</template>

<script>
  import ConsoleMonitor from '../components/ConsoleMonitor';
  import ConsoleCommandForm from '../components/ConsoleCommandForm';

  export default {
    name: "Console",
    components: {
      ConsoleMonitor,
      ConsoleCommandForm
    }
  }
</script>

<style scoped>
  #console-wrapper {
    width: 70%;
    margin: 0 auto;
  }
</style>