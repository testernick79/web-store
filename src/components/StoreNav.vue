<template>
  <div id="StoreNav">
    <div class="card text-center py-5">
      <!--Start of NAV CARD
      create <storeNav />-->
      <h1 class="text-center heading-3 py-3">SquatchLand Store</h1>
      <div id="nav-store" class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a href="#" class="nav-link">Hats</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Kids</a>
          </li>
          <li class="nav-item">
            <a id="active-link" href="#" class="nav-link active">Adults</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div#nav-store {
  background-color: #587886;
}
a#active-link {
  background-color: #04b0fc;
}
</style>