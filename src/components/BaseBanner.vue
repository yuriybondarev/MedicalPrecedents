<template>
  <div class="banner-model">
    <fa-icon :icon="icon"/>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      }
    }
  };
</script>

<style>
  .banner-model {
    background-color: #2f3439;
    padding: 14px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .banner-model svg {
    margin-right: 4px;
    font-size: 1.05em;
  }
</style>