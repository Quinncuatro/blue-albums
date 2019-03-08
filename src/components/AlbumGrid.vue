<template>
  <div class="album-details">
    <a href="#/album-details"><img :alt="title + ' by ' + band" :src="getImgUrl(cover)" /></a>
    <span class="caption">
      <h1>{{ title }}</h1>
      <h3>{{ band }}</h3>
      <a class="listenLink" :href="spotifyLink"><i class="fab fa-spotify fa-2x"></i></a>
      <a class="listenLink" :href="itunesLink"><i class="fab fa-itunes fa-2x"></i></a>
    </span>
  </div>
</template>

<script>
export default {
  name: "AlbumGrid",
  props: {
    cover: String,
    title: String,
    band: String,
    spotifyLink: String,
    itunesLink: String
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/album_covers/" + pic);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.album-details {
  vertical-align: top;
  display: inline-block;
  text-align: left;
  width: 220px;
  margin: 0 10 0 10;
}
img {
  width: 200px;
  height: 200px;
  background-color: grey;
}
.caption {
  display: block;
}
h1 {
  margin: -5px 0px -5px 0px;
}
h3 {
  margin: 5px 0px 5px 0px;
}
a {
  color: #0099cb;
}
.listenLink {
  margin: 0px 10px 0px 0px;
}
</style>
