<template>
    <transition-group 
      tag="div"
      id="console-monitor"
      enter-active-class="animate__animated animate__bounceInLeft animate__fast"
    >
      <console-command v-for="(command, index) in commands" :key="index" :command="command"/>
    </transition-group>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ConsoleCommand from './ConsoleCommand';

  export default {
    name: "ConsoleMonitor",
    computed: mapGetters('console', ['commands']),
    components: {
      ConsoleCommand
    }
  };
</script>

<style scoped>
  #console-monitor {
    background-color: #2f3439;
    padding: 18px;
    border-radius: 4px;
    margin-bottom: 24px;
    max-height: 50vh;
    overflow: auto;
  }

  /* Полоса прокрутки */
  #console-monitor::-webkit-scrollbar { width: 8px; }
  #console-monitor::-webkit-scrollbar-track-piece { background-color: #2f3439;}
  #console-monitor::-webkit-scrollbar-thumb { background-color: #ee7147; border-radius: 4px;}
</style>