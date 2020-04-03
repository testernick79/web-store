<template>
  <div class="row">
    <div class="col-md-4 text-center py-3"
         v-for="item in items"
         :key="item.invId">
      <slot v-bind="item">
        <div class="card">
          <img :src="item.image" :alt="item.name" class="card-image-top" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="card-text py-3">{{ item.price / 100 }}.00</div>
            <div class="row justify-content-end">
              <button class="btn-block btn-danger">Add To Cart slot</button>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => {}
      }
    }
  }
</script>

<style>
</style>
