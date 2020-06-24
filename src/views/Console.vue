<template>
  <div id="console-view-wrapper">
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster">
      <ConsoleMonitor v-show="isSended"/>
    </transition>
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
    },
    computed: {
      isSended() {
        return (this.$store.getters.commands.length !== 0) ? true : false;
      }
    },
  }
</script>

<style>
  #console-monitor {
    margin-bottom: 22px;
  }
</style>