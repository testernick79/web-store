<template>
  <div id="Nav">
    <ul class="nav main-nav">
      <li class="list-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>

      <li class="list-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="list-item">
        <a href="htps://www.facebook.com" id="fb" class="nav-link">
          <img src="../assets/images/fb.png" alt />
        </a>
      </li>
      <li class="list-item justify-content-center">
        <a href="https://www.linkedin.com" id="ig" class="nav-link">
          <img src="../assets/images/li.png" alt />
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
  a.nav-link
  {
    color: white;
  }

  a.Social-1
  {
    float: right;
  }

  a.Social-2
  {
    float: right;
  }

  a.Social-3
  {
    float: right;
  }

  img.li
  {
    width: 16px;
    height: 16px;
  }

  img.fb
  {
    width: 16px;
    height: 16px;
  }

  ul.main-nav
  {
    background-color: #04b0fc;
  }
</style>
