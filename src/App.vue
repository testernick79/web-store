<template>
  <div id="app">
    <Navigation />
    <Carousel />
    <div class="container my-5"></div>
    <router-view />
  </div>
</template>

<script>
import About from "./views/About";
import Home from "./views/Home";
import Navigation from "./components/Navigation.vue";
import StoreNavigation from "./components/StoreNavigation.vue";
import Carousel from "./components/Carousel.vue";
import Hats from "./components/Hats.vue";
import Kids from "./components/Kids.vue";
import Adults from "./components/Adults.vue";
export default {
  name: "app",
  components: {
    Navigation,
    Hats,
    Kids,
    Adults,
    Carousel
  }
};
</script>
<style lang=""></style>
