<template>
  <div id="app">
    <navigation />
    <h1 class="text-center heading-1 py-3">SquatchLand Store</h1>
    <carousel />
    <div class="container my-5"></div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Carousel from "./components/Carousel.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Carousel
  }
};
</script>
<style lang=""></style>
