<template>
  <div id="Nav">
    <ul class="nav main-nav">
      <router-link class="list-item">
        <a href="/" class="nav-link" to="/" tag="li"> Home</a>
      </router-link>

      <li class="list-item">
        <a href="/about" class="nav-link" to="/" tag="li">About</a>
      </li>
      <li class="list-item">
        <a href="htps://www.facebook.com" id="fb" class="nav-link">
          <img src="../assets/fb.png" alt />
        </a>
      </li>
      <li class="list-item justify-content-center">
        <a href="https://www.linkedin.com" id="ig" class="nav-link">
          <img src="../assets/li.png" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Hats from "./Hats";
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
