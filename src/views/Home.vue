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

      <router-link to="/store" class="btn">Go To Our Store</router-link>
    </div>
  </div>
</template>

<script>
import Store from "../views/Store";
export default {
  name: "Home",
  components: Store
};
</script>

<style>
h1.headingText {
  color: #04b0fc;
}
button.btn {
  background-color: #04b0fc;
}
p.whoWeAre {
  color: #587886;
}
a.btn {
  background-color: #04b0fc;
}
</style>
