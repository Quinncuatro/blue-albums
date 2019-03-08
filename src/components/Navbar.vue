<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Top 25</router-link> |
      <router-link to="/contenders">Contenders</router-link> |
      <router-link to="/process">Process</router-link> |
      <router-link to="/album-details">Details</router-link>
    </div>
    <div class="hello">
      <h1>/Blo͞o ˈAlbəm/ - ALBUM DETAILS</h1>
      <!-- eslint-disable-next-line -->
      <h2><i>noun</i> - 1. An album that can be listened to in it's entirety, front to back, without skipping a single track.</h2>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "AlbumDetails"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px 30px 0 30px;
  font-size: 22px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #0099cb;
}
</style>
