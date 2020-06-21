<template>
  <form-model id="send-excel-form-id">
    <input name="excel-file" accept=".xls,.xlsx" type="file" />
    <button>Отправить файл</button>
  </form-model>
</template>

<script>
  import FormModel from "../models/Form";

  export default {
    components: {
      FormModel
    }
  };
</script>