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
import Hats from "./views/Hats.vue";
import Kids from "./views/Kids.vue";
import Adults from "./views/Adults.vue";
export default {
  name: "app",
  components: {
    Navigation,
    StoreNavigation,
    Carousel
  }
};
</script>
<style lang=""></style>
