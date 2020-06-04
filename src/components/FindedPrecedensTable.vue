<template>
  <table id="finded-precedents-table">
    <thead>
      <tr>
        <td v-for="(param, index) in params" :key="index">{{ param }}</td>
      </tr>
    </thead>
    <transition-group 
      tag="tbody"
      enter-active-class="animate__animated animate__bounceInLeft animate__fast"
    >
      <tr v-for="(precedent, index) in precedents" :key="index">
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
  </table>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "FindedPrecedentsTable",
    computed: mapGetters('precedents', ['precedents']),
    data() {
      return {
        params: [
          "Имя",
          "Фамилия",
          "Пол",
          "Возраст",
          "Рост",
          "Вес",
          "Тип",
          "Анамнез",
          "Сосуды",
          "ИМТ",
          "ОТ",
          "ИК",
          "САД",
          "ДАД",
          "СрАД",
          "ПАД",
          "ЧСС",
          "ИА аорт",
          "ED",
          "ИПИ",
          "RT"
        ]
      };
    }
  };
</script>