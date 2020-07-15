<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'Home'}">
        <MedicineLogo/>
      </router-link>
    </header>
    <nav>
      <MenuList/>
    </nav>
    <main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view/>
      </transition>
    </main>
    <footer>
      <p>© 2020 БИС 17-01</p>
    </footer>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInDown animate__faster"
      leave-active-class="animate__animated animate__slideOutUp animate__faster"
    >
      <BannerError
        v-if="bannerType === BANNER_ERROR"
        :message="bannerMessage"
      />
      <BannerSuccess
        v-else-if="bannerType === BANNER_SUCCESS"
        :message="bannerMessage"
      />
    </transition>
  </div>
</template>

<script>
  import MedicineLogo from './components/TheMedicineLogo';
  import MenuList from './components/TheMenuList';
  import BannerSuccess from './components/BannerSuccess';
  import BannerError from './components/BannerError';
  import { mapGetters } from 'vuex';
  import Banner from './classes/banner';

  export default {
    components: {
      MedicineLogo,
      MenuList,
      BannerSuccess,
      BannerError
    },
    data() {
      return {
        BANNER_ERROR: Banner.BANNER_ERROR,
        BANNER_SUCCESS: Banner.BANNER_SUCCESS
      }
    },
    computed: mapGetters(['bannerType', 'bannerMessage'])
  }; 
</script>

<style>
  @import "~reset-css/reset.css";
  @import "~animate.css/animate.min.css";
  
  * {
    box-sizing: border-box;
    outline: none;
  }

  .basic-wrapper {
    width: 70%;
    margin: 0 auto;
  }

  body {
    background-color: #2b2b2b;
    color: #eee;
    font-family: Arial, sans-serif;
  }

  ::selection {
    color: #eee;
    background-color: #ee7147;
  }

  a, a:visited {
    color: #ee7147;
  }

  button {
    cursor: pointer;
  }

  header, main, footer {
    padding: 32px;
  }

  header, footer {
    text-align: center;
  }
  
  footer {
    background-color: #2f3439;
  }
</style>