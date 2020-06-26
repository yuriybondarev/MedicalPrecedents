<template>
  <BaseBanner 
    class="banner-success-model"
    icon="check-circle"
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
  .banner-success-model {
    background-color: #2b9884;
  }
</style>