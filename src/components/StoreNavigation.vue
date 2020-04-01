<template>
  <div id="StoreNavigation">
    <div class="card text-center py-5">
      <!--Start of NAV CARD
      create <storeNav />-->
      <h1 class="text-center heading-3 py-3">SquatchLand Store</h1>
      <div id="nav-store" class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link href="#" class="nav-link">Hats</router-link>
          </li>
          <li class="nav-item">
            <router-link href="#" class="nav-link">Kids</router-link>
          </li>
          <li class="nav-item">
            <router-link id="active-link" href="#" class="nav-link active"
              >Adults</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Adults from "./Adults";
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
