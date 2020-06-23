<template>
  <div class="command-wrapper">
    <p>
      <fa-icon icon="terminal"/>
      {{ command.value }}
    </p>
    <p>{{ command.result }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      command: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
  .command-wrapper:not(:last-child) {
    margin-bottom: 14px;
  }

  .command-wrapper p {
    margin: 0;
    line-height: 1.5;
  }

  .command-wrapper svg {
    color: #ee7147;
    margin-right: 6px;
  }
</style>