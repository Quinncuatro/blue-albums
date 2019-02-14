<template>
  <div class="home">
    <div class="hello">
      <h1>/Blo͞o ˈAlbəm/</h1>
      <h2><i>noun</i></h2>
      <!-- eslint-disable-next-line -->
      <h3>1. An album that can be listened to in it's entirety, front to back, without skipping a single track.</h3>
    </div>
    <!-- eslint-disable-next-line -->
    <Album cover="weezer-blue_album.jpeg" 
    title="Blue Album" 
    band="Weezer" 
    spotifyLink="https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=gR_B1thgTmuP0mVTodxfdA" 
    itunesLink="https://geo.itunes.apple.com/us/album/weezer/1136784464?mt=1&app=music" />
    <!-- eslint-disable-next-line -->
    <Album cover="tmbg-flood.png" 
    title="Flood" 
    band="They Might Be Giants" 
    spotifyLink="https://open.spotify.com/album/7FwAtuhhWivxvK4aPgyyUD?si=-2VKW6syTD-STaDETqcTVQ" 
    itunesLink="https://geo.itunes.apple.com/us/album/flood/298111036?mt=1&app=music" />
    <!-- eslint-disable-next-line -->
    <Album cover="rhcp-blood_sugar_sex_magik.png" 
    title="Blood Sugar Sex Magik" 
    band="Red Hot Chili Peppers" 
    spotifyLink="https://open.spotify.com/album/30Perjew8HyGkdSmqguYyg?si=n88VNfm0Skud7MG95OPyEQ" 
    itunesLink="https://geo.itunes.apple.com/us/album/blood-sugar-sex-magik-deluxe-version/948460531?mt=1&app=music" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #0099cb;
}
</style>

<script>
// @ is an alias to /src
import Album from "@/components/Album.vue";

export default {
  name: "home",
  components: {
    Album
  }
};
</script>
