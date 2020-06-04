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
    data() {
      return {
        testPrecedents: [
          {
            name: "Аркадий",
            surname: "Паровозов",
            gender: "м",
            age: 12,
            height: 2.3,
            weight: 64,
            type: null,
            anamnesys: 1,
            vesselsState: "Риск",
            bmi: 2,
            wc: 1,
            si: 3,
            sbp: 4,
            dbp: 2,
            mbp: 6,
            pbp: 3,
            hr: 3,
            aai: 8,
            ed: 2,
            fdi: 4,
            rt: 1
          },
          {
            name: "Карл",
            surname: "Джонсон",
            gender: "ж",
            age: 112,
            height: 2.3,
            weight: 64,
            type: null,
            anamnesys: 1,
            vesselsState: "Риск",
            bmi: 2,
            wc: 1,
            si: 3,
            sbp: 4,
            dbp: 2,
            mbp: 6,
            pbp: 3,
            hr: 3,
            aai: 8,
            ed: 2,
            fdi: 4,
            rt: 1
          }
        ]
      };
    },
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