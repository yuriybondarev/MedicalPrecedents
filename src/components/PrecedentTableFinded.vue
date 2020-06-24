<template>
  <BaseTable 
    id="finded-precedents-table"
    :headers="headers"
    :body="precedents" 
    @dblclick="clear"
  />
</template>

<script>
  import BaseTable from './BaseTable';
  import headers from '@/store/static/precedent-table-headers-finded.js';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      BaseTable
    },
    data() {
      return {
        headers
      };
    },
    computed: mapGetters(['precedents']),
    methods: {
      clear() {
        this.$store.commit('CLEAR_PRECEDENTS');
      }
    },
  };
</script>