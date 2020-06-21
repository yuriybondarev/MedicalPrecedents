<template>
  <div id="console-wrapper">
    <console-monitor></console-monitor>
    <send-console-command-form></send-console-command-form>
  </div>
</template>

<script>
  import ConsoleMonitor from '../components/console/Monitor';
  import SendConsoleCommandForm from '../components/forms/SendConsoleCommand';

  export default {
    components: {
      ConsoleMonitor,
      SendConsoleCommandForm
    }
  }
</script>

<style>
  #console-wrapper {
    width: 70%;
    margin: 0 auto;
  }
</style>