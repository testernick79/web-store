<template>
  <div id="StoreNavigation">
    <!--Start of NAV CARD
    create <storeNav />-->
    <h1 class="text-center heading-3 py-3">SquatchLand Store</h1>
    <div id="nav-store" class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item">
          <router-link to="/hats" class="nav-link">hats</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/adults" class="nav-link">Adults</router-link>
        </li>
        <li class="nav-item">
          <router-link id="active-link" to="/kids" class="nav-link">Kids</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hats from "../views/Hats";
import Adults from "../views/Adults.vue";
import Kids from "../views/Kids";

export default {
  name: "StoreNavigation",
  components: {
    Adults
  }
};
</script>

<style>
div#nav-store {
  background-color: #587886;
}
a#active-link {
  background-color: #04b0fc;
}
</style>
