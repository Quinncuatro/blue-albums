<template>
  <div class="box">
    <!-- eslint-disable-next-line -->
    <img class="album-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="album-name">Mad Season</p>
      <p class="band-name">Matchbox Twenty (2000)</p>
      <p class="genres">Alternative Rock - Post Grunge - Pop Rock</p>
      <p class="runtime">50:30</p>
      <a class="listenLink" href="https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=gR_B1thgTmuP0mVTodxfdA"><i class="fab fa-spotify fa-2x"></i></a>
      <a class="listenLink" href="https://geo.itunes.apple.com/us/album/weezer/1136784464?mt=1&app=music"><i class="fab fa-itunes fa-2x"></i></a>
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States.
      </pre>
    </div>
    <!-- eslint-disable-next-line -->
    <img class="album-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="album-name">Good Kid, M.A.A.D. City</p>
      <p class="band-name">Kendrick Lamar (2012)</p>
      <p class="genres">West Coast Hip Hop - Gangsta Rap</p>
      <p class="runtime">68:23</p>
      <a class="listenLink" href="https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=gR_B1thgTmuP0mVTodxfdA"><i class="fab fa-spotify fa-2x"></i></a>
      <a class="listenLink" href="https://geo.itunes.apple.com/us/album/weezer/1136784464?mt=1&app=music"><i class="fab fa-itunes fa-2x"></i></a>
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States.
      </pre>
    </div>
    <!-- eslint-disable-next-line -->
    <img class="album-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="album-name">Alive 2007</p>
      <p class="band-name">Daft Punk (2007)</p>
      <p class="genres">French House - House</p>
      <p class="runtime">84:03</p>
      <a class="listenLink" href="https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=gR_B1thgTmuP0mVTodxfdA"><i class="fab fa-spotify fa-2x"></i></a>
      <a class="listenLink" href="https://geo.itunes.apple.com/us/album/weezer/1136784464?mt=1&app=music"><i class="fab fa-itunes fa-2x"></i></a>
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States.
      </pre>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.album-image {
  width: 150px;
  height: 150px;
  float: left;
  padding: 0 10px 0 0;
}

.caption {
  display: inline-block;
}

.album-name, .rewiew-name {
  font-weight: bold;
  font-size: 36px;
  margin: 0 0 0 0px;
  line-height: 36px;
}

.band-name {
  font-weight: bold;
  font-size: 26px;
  margin: 0 0 0 0px;
  line-height: 32px;
}

.genres, .runtime {
  font-weight: bold;
  font-size: 22px;
  margin: 0 0 0 0px;
  line-height: 22px;
}

.listenLink {
  line-height: 32px;
}

a {
  color: #0099cb;
  text-decoration: none;
}

.listenLink {
  margin: 0px 10px 0px 0px;
}

pre {
  font-family: 'Teko', sans-serif;
  font-size: 18px;
  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  margin-bottom: 0px;
}

</style>

<script>
// @ is an alias to /src
import Album from "@/components/AlbumContender.vue";

export default {
  name: "contenders"
};
</script>

