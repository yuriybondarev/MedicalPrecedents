<template>
  <div>
    <find-precedents-form class="form-model"/>
    <finded-precedents-table class="table-model"/>
  </div>
</template>

<script>
  import FindedPrecedentsTable from '../components/FindedPrecedensTable';
  import FindPrecedentsForm from '../components/FindPrecentsForm';

  export default {
    name: "Find",
    components: {
      FindedPrecedentsTable,
      FindPrecedentsForm
    }
  };
</script>

<style scoped>
  #finded-precedents-table {
    margin-top: 36px;
  }
</style>