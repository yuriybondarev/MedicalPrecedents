<template>
  <div 
    id="console-monitor"
    class="basic-wrapper"
    @dblclick="clear"
  >
    <transition-group
      tag="div"
      enter-active-class="animate__animated animate__flipInX animate__fast"
    >
      <ConsoleCommand
        v-for="command in commands" 
        :key="command" 
        :command="command"
      />
    </transition-group>
  </div>
</template>

<script>
  import ConsoleCommand from './ConsoleCommand';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      ConsoleCommand
    },
    computed: mapGetters(['commands']),
    methods: {
      clear() {
        this.$store.commit('CLEAR_COMMANDS');
      }
    }
  };
</script>

<style>
  #console-monitor {
    background-color: #2f3439;
    padding: 18px;
    border-radius: 4px;
    max-height: 50vh;
    overflow: auto;
    position: relative;
  }

  /* Полоса прокрутки */
  #console-monitor::-webkit-scrollbar { width: 8px; }
  #console-monitor::-webkit-scrollbar:horizontal { height: 8px; }
  #console-monitor::-webkit-scrollbar-track-piece { background-color: #2f3439;}
  #console-monitor::-webkit-scrollbar-thumb { background-color: #ee7147; border-radius: 4px;}
</style>