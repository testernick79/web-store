<template>
  <!--Start of Jumbotron-->

  <div id="app">
    <Nav />
    <Carousel />
    <Kids />

    <div class="container my-5"></div>
  </div>
</template>

<script>
import About from "./views/About";
import Home from "./views/Home";
import Nav from "./components/Nav.vue";
import Carousel from "./components/Carousel.vue";
import Hats from "./components/Hats.vue";
import Kids from "./components/Kids.vue";
import Adults from "./components/Adults.vue";

export default {
  name: "app",
  components: {
    Nav,
    Hats,
    Kids,
    Adults,
    Carousel,
    Home,
    About
  }
};
</script>
<style></style>
