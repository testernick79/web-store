<template>
  <!--Start of Jumbotron-->

  <div id="app">
    <Nav />
    <Carousel />

    <div class="container my-5">
      <Adults />
    </div>
  </div>
</template>

<script>
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
    Carousel
  }
};
</script>
<style></style>
