<template>
    <div id="console-monitor" @dblclick="clearMonitor">
      <transition-group 
        tag="div"
        enter-active-class="animate__animated animate__bounceInLeft animate__fast"
      >
        <console-command v-for="command in commands" 
          :key="command" 
          :command="command"></console-command>
      </transition-group>
    </div>
</template>

<script>
  import ConsoleCommand from './Command';
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters('console', ['commands']),
    methods: {
      clearMonitor() {
        this.$store.commit('console/clearCommands');
      }
    },
    components: {
      ConsoleCommand
    }
  };
</script>

<style>
  #console-monitor {
    background-color: #2f3439;
    padding: 18px;
    border-radius: 4px;
    margin-bottom: 24px;
    height: 50vh;
    overflow: auto;
  }

  /* Полоса прокрутки */
  #console-monitor::-webkit-scrollbar { width: 8px; }
  #console-monitor::-webkit-scrollbar-track-piece { background-color: #2f3439;}
  #console-monitor::-webkit-scrollbar-thumb { background-color: #ee7147; border-radius: 4px;}
</style>