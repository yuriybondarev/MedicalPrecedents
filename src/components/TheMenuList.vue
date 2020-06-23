<template>
  <ul id="menu">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      tag="li"
      :to="item.route"
      active-class="link-active"
      exact
    >
      <a>{{ item.name }}</a>
    </router-link>
  </ul>
</template>

<script>
  import items from '@/store/static/menu-items.js';

  export default {
    data() {
      return {
        items
      };
    }
  };
</script>

<style>
  #menu {
    display: flex;
    justify-content: center;
    background-color: #2f3439;
    padding: 0;
    margin: 0;
  }

  #menu a {
    text-decoration: none;
    color: #eee;
    text-transform: uppercase;
  }

  #menu li {
    display: block;
    padding: 14px 0 10.5px;
    border-bottom: 3.5px solid #2f3439;
    transition: 500ms linear border-bottom;
  }

  #menu li:not(:last-child) {
    margin-right: 24px;
  }

  #menu .link-active, #menu li:hover {
    transition: 500ms linear border-bottom;
    border-bottom: 3.5px solid #ee7147 !important;
  }
</style>