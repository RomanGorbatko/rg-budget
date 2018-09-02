<template>
  <div id="app">
    <b-container fluid>
      <nav-bar></nav-bar>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'

  export default {
    name: 'rg-budget',
    components: {
      NavBar
    }
  }
</script>

<style>
  /* CSS */

  html, body {
    background-color: #e9ecef;
  }

  .container-fluid {
    padding: 0;
    min-height: 100%;
  }
</style>
