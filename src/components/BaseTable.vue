<template>
  <table 
    class="table-model"
    v-on="$listeners"
  >
    <thead v-if="headers.length !== 0">
      <tr>
        <td
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
        </td>
      </tr>
    </thead>
    <slot></slot>
  </table>
</template>

<script>
  export default {
    props: {
      headers: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>
  .table-model {
    border-collapse: collapse;
    width: 100%;
  }

  .table-model thead {
    background-color: #ee7147;
    text-transform: uppercase;
  }

  .table-model td {
    padding: 8px;
    text-align: center;
  }

  .table-model tbody tr:nth-child(even) {
    background-color: #2f3439;
  }
</style>