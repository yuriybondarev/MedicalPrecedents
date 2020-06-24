<template>
  <BaseTable
    id="excel-parsing-table"
    :headers="headers"
    :body="values"
  />
</template>

<script>
  import BaseTable from './BaseTable';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      BaseTable
    },
    computed: mapGetters(['headers', 'values'])
  };
</script>

<style>
  #excel-parsing-table {
    width: auto;
    min-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  #excel-parsing-table thead {
    text-transform: none;
  }
</style>