<template>
  <!--Start of Jumbotron-->

  <div id="app">
    <Nav />
    <Carousel />

    <div class="container my-5">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Nav from "./components/Navigation.vue";
  import Carousel from "./components/Carousel.vue";

  export default {
    name: "app",
    components: {
      Nav,
      Carousel
    }
  };
</script>

<style lang="scss">
  #app
  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
