<template>
  <div>
    <find-precedents-form></find-precedents-form>
    <finded-precedents-table></finded-precedents-table>
  </div>
</template>

<script>
  import FindedPrecedentsTable from '../components/tables/FindedPrecedents';
  import FindPrecedentsForm from '../components/forms/FindPrecedents';

  export default {
    components: {
      FindedPrecedentsTable,
      FindPrecedentsForm
    }
  };
</script>

<style>
  #finded-precedents-table {
    margin-top: 36px;
  }
</style>