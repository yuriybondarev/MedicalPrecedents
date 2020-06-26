<template>
  <BaseForm 
    class="flex-form-model"
    v-on="$listeners"
  >
    <slot></slot>
  </BaseForm>
</template>

<script>
  import BaseForm from './BaseForm';

  export default {
    components: {
      BaseForm
    },
    extends: BaseForm,
  };
</script>

<style>
  .flex-form-model {
    display: flex;
  }

  .flex-form-model input {
    flex-grow: 1;
  }
  .flex-form-model button {
    width: 10% !important;
    margin-top: 0 !important;
    margin-left: 12px;
  }
</style>