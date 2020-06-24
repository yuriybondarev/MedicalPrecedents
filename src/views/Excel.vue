<template>
  <div id="excel-view-wrapper">
    <ExcelFormSend/>
    <transition enter-active-class="animate__animated animate__fadeIn">
      <ExcelTableParsing v-show="isParsed"/>
    </transition>
  </div>
</template>

<script>
  import ExcelFormSend from '../components/ExcelFormSend';
  import ExcelTableParsing from '../components/ExcelTableParsing';

  export default {
    components: {
      ExcelFormSend,
      ExcelTableParsing
    },
    computed: {
      isParsed() {
        let headersLength = this.$store.getters.headers.length;
        let valuesLength = this.$store.getters.values.length;

        return ((headersLength !== 0) && (valuesLength !== 0)) ? true : false;
      }
    }
  };
</script>

<style>
  #excel-parsing-table {
    margin-top: 22px;
  }
</style>