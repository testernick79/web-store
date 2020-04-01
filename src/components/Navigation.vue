<template>
  <div id="Navigation">
    <ul class="nav main-nav">
      <router-link to="/" class="nav-link"
        ><img src="../assets/Site-Images/header-logo.png"
      /></router-link>

      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/hats" class="nav-link">| Hats</router-link>
      <router-link to="/adults" class="nav-link">| Adults</router-link>
      <router-link to="/kids" class="nav-link">| Kids</router-link>
      <!-- <li class="list-item">
        <a href="htps://www.facebook.com" id="fb" class="nav-link">
          <img src="../assets/icons/fb.jpg" alt />
        </a>
      </li>
      <li class="list-item justify-content-center">
        <a href="https://www.linkedin.com" id="ig" class="nav-link">
          <img src="../assets/icons/li.jpg" alt />
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
a.nav-link {
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
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
