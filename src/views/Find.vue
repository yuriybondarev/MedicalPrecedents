<template>
  <div id="find-view-wrapper">
    <PrecedentFormFind/>
    <transition enter-active-class="animate__animated animate__fadeIn">
      <PrecedentTableFinded v-show="isFinded"/>
    </transition>
  </div>
</template>

<script>
  import PrecedentTableFinded from '../components/PrecedentTableFinded';
  import PrecedentFormFind from '../components/PrecedentFormFind';

  export default {
    components: {
      PrecedentTableFinded,
      PrecedentFormFind
    },
    computed: {
      isFinded() {
        return (this.$store.getters.precedents.length !== 0) ? true : false;
      }
    }
  };
</script>

<style>
  #finded-precedents-table {
    margin-top: 36px;
  }
</style>