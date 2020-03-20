<template>
  <div id="Nav">
    <ul class="nav main-nav">
      <router-link to="/" class="nav-link">Home</router-link>

      <router-link to="/about" class="nav-link">About</router-link>
      <li class="list-item">
        <a href="htps://www.facebook.com" id="fb" class="nav-link">
          <img src="../assets/icons/fb.jpg" alt />
        </a>
      </li>
      <li class="list-item justify-content-center">
        <a href="https://www.linkedin.com" id="ig" class="nav-link">
          <img src="../assets/icons/li.jpg" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
a.nav-link {
  color: white;
}
a.Social-1 {
  float: right;
}
a.Social-2 {
  float: right;
}
a.Social-3 {
  float: right;
}
img.li {
  width: 16px;
  height: 16px;
}
img.fb {
  width: 16px;
  height: 16px;
}
ul.main-nav {
  background-color: #04b0fc;
}
</style>
