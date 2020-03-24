<template>
  <div id="Carousel">
    <div class="container my-5">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/Site-Images/Frontpage.png"
              class="d-block w-100"
              alt="Welcome"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel"
};
</script>

<style>
body {
  background-color: black;
}
img {
  border-radius: 0.25rem;
}
</style>
