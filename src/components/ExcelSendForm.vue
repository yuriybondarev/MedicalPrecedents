<template>
  <BaseForm 
    id="send-excel-form"
    @submit.prevent="submit"
  >
    <input 
      name="excel-file" 
      accept=".xls,.xlsx" 
      type="file" 
    />
    <button>Отправить файл</button>
  </BaseForm>
</template>

<script>
  import BaseForm from './BaseForm';

  export default {
    components: {
      BaseForm
    },
    methods: {
      submit() {
        alert('Файл отправлен');
      }
    }
  };
</script>