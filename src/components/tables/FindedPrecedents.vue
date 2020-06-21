<template>
  <table-model :headers="headers" @dblclick="clearTable">
    <transition-group 
      tag="tbody"
      enter-active-class="animate__animated animate__fadeIn animate__fast"
    >
      <tr v-for="precedent in precedents" :key="precedent">
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
  </table-model>
</template>

<script>
  import TableModel from '../models/Table';
  import headers from '@/store/static/finded-precedents-table-headers.js';
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters('precedents', ['precedents']),
    data() {
      return {
        headers
      };
    },
    methods: {
      clearTable() {
        this.$store.commit('precedents/clearPrecedents');
      }
    },
    components: {
      TableModel
    }
  };
</script>