<template>
  <div id="Store">
    <store-navigation />
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

    <!--Start of Card Body-->
    <div class="card-body">
      <h3 class="text-center text-uppercase py-3">Adult Beanie & Skullcaps</h3>
      <p class="card-text lead">Don't see what your looking for? We also offer custome work too!</p>
      <div class="row">
        <div class="col-md-4 text-center py-3">
          <div class="card">
            <img :src="item.image" :alt="item.name" class="card-image-top" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <div class="card-text py-3">{{ item.price / 100 }}.00</div>
              <div class="row justify-content-end">
                <button class="btn-block btn-danger">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Start of CARD Body-->
  </div>
</template>

<script>
import StoreNavigation from "../components/StoreNavigation";
export default {
  name: "Store"
};
</script>

<style>
h1.text-center {
  color: #04b0fc;
}
</style>
