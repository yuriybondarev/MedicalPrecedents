<template>
  <BaseBanner 
    class="banner-error-model"
    icon="exclamation-circle"
  >
    {{ message }}
  </BaseBanner>
</template>

<script>
  import BaseBanner from './BaseBanner';
  import BannerMessage from '@/mixins/banner-message';

  export default {
    components: {
      BaseBanner
    },
    mixins: [BannerMessage]
  };
</script>

<style>
  .banner-error-model {
    background-color: #BF3131;
  }
</style>