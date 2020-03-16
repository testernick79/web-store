<template>
  <div id="Home">
    <div class="container">
      <h1 class="display-4 text-center headingText">We Are SquatchLand!</h1>
      <p class="whoWeAre">
        <strong>
          We make custom shirts to order we do have a verity of options to
          choose from. If there is a design you like or if I can create one from
          a file you have, contct me and I can customize your order.
        </strong>
      </p>
      <p>
        <a class="btn btn-success btn-lg" href="#" role="button">Go To Our Store</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  };
</script>

<style>
  h1.headingText
  {
    color: #04b0fc;
  }

  p.whoWeAre
  {
    color: #587886;
  }

  a.btn
  {
    background-color: #04b0fc;
  }
</style>
