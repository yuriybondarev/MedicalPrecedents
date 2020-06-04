<template>
  <div id="app">
    <header>
      <logo/>
    </header>
    <nav>
      <menu-list/>
    </nav>
    <main>
      <transition
        :key="$route.name"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__fast"
      >
        <router-view></router-view>
      </transition>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import Logo from './components/Logo';
  import MenuList from './components/MenuList';

  export default {
    components: {
      Logo,
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

  /* Базовые стили для элементов */
  /* ФОРМЫ */
  .form-model {
    width: 70%;
    margin: 0 auto;
  }

  .form-model input:not(.not-block-input), .form-model button, .form-model select {
    display: block;
    width: 100%;
    border: none;
    padding: 8px;
    border-radius: 4px;
  }

  .form-model input, .form-model select {
    background-color: #eee;
    color: #2b2b2b;
  }

  .form-model input[type="radio"], .form-model input[type="checkbox"] {
    margin-right: 6px;
  }

  .form-model button {
    text-transform: uppercase;
    color: #eee;
    background-color: #2b9884;
    padding: 10px;
    margin-top: 24px;
  }

  .form-model .min-max-wrapper {
    display: flex;
  }

  .form-model .min-max-wrapper input:not(:last-child) {
    margin-right: 12px;
  }

  .form-model label:not(.not-block-label) {
    display: block;
    margin-bottom: 8px;
  }

  .form-model > div div:not(:last-child), .form-model select {
    margin-bottom: 16px;
  }

  /* ТАБЛИЦЫ */
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

  /* Общее */
  header, main {
    padding: 32px;
  }

  /* Header */
  header {
    text-align: center;
  }
</style>