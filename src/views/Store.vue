<template>
  <div id="Store">
    <!--Start of NAV CARD-->
    <h1 class="text-center heading-3 py-3">SquatchLand Store</h1>
    <div id="nav-store" class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item">
          <a id="active-link" to="/hats" class="nav-link active">Hats</a>
        </li>
        <li class="nav-item">
          <a to="/kids" class="nav-link text-white">Kids</a>
        </li>
        <li class="nav-item">
          <a to="/adults" class="nav-link text-white">Adults</a>
        </li>
      </ul>
    </div>

    <!--End of NAV CARD-->
  </div>
</template>

<script>
import StoreNavigation from "../components/StoreNavigation";
export default {
  name: "Store",
  components: {
    StoreNavigation
  }
};
</script>

<style>
h1.text-center {
  color: #04b0fc;
}
</style>
