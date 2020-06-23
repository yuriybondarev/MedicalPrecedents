<template>
  <div id="app">
    <header>
      <MedicineLogo/>
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
      <p>© 2020 Евгений Миколенко (Fertnam)</p>
    </footer>
  </div>
</template>

<script>
  import MedicineLogo from './components/TheMedicineLogo';
  import MenuList from './components/TheMenuList';

  export default {
    components: {
      MedicineLogo,
      MenuList
    }
  }; 
</script>

<style>
  @import "~reset-css/reset.css";
  @import "~animate.css/animate.min.css";
  
  * {
    box-sizing: border-box;
    outline: none;
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