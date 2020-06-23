<template>
  <div id="console-view-wrapper">
    <ConsoleMonitor/>
    <ConsoleCommandFormSend/>
  </div>
</template>

<script>
  import ConsoleMonitor from '../components/ConsoleMonitor';
  import ConsoleCommandFormSend from '../components/ConsoleCommandFormSend';

  export default {
    components: {
      ConsoleMonitor,
      ConsoleCommandFormSend
    }
  }
</script>

<style>
  #console-view-wrapper {
    width: 70%;
    margin: 0 auto;
  }
</style>