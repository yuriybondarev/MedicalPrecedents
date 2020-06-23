<template>
  <BaseTable 
    id="finded-precedents-table"
    :headers="headers" 
    @dblclick="clear"
  >
    <transition-group 
      tag="tbody"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <tr 
        v-for="(precedent, index) in precedents" 
        :key="index"
      >
        <td>{{ precedent.name }}</td>
        <td>{{ precedent.surname }}</td>
        <td>{{ precedent.gender }}</td>
        <td>{{ precedent.age }}</td>
        <td>{{ precedent.height }}</td>
        <td>{{ precedent.weight }}</td>
        <td>{{ precedent.type }}</td>
        <td>{{ precedent.anamnesys }}</td>
        <td>{{ precedent.vesselsState }}</td>
        <td>{{ precedent.bmi }}</td>
        <td>{{ precedent.wc }}</td>
        <td>{{ precedent.si }}</td>
        <td>{{ precedent.sbp }}</td>
        <td>{{ precedent.dbp }}</td>
        <td>{{ precedent.mbp }}</td>
        <td>{{ precedent.pbp }}</td>
        <td>{{ precedent.hr }}</td>
        <td>{{ precedent.aai }}</td>
        <td>{{ precedent.ed }}</td>
        <td>{{ precedent.fdi }}</td>
        <td>{{ precedent.rt }}</td>
      </tr>
    </transition-group>
  </BaseTable>
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