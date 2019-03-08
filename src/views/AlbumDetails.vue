<template>
  <div class="box">
    <!-- eslint-disable-next-line -->
    <img class="album-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="album-name">Blue Album</p>
      <p class="band-name">Weezer (1994)</p>
      <p class="genres">Alternative Rock - Power Pop - Emo</p>
      <p class="runtime">41:26</p>
      <a class="listenLink" href="https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q?si=gR_B1thgTmuP0mVTodxfdA"><i class="fab fa-spotify fa-2x"></i></a>
      <a class="listenLink" href="https://geo.itunes.apple.com/us/album/weezer/1136784464?mt=1&app=music"><i class="fab fa-itunes fa-2x"></i></a>
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States.

Since its release, the band also released several other self-titled albums with similar covers and different colored backgrounds, each of which is known by the color of the album.

Most of the album was written by Rivers Cuomo. Exceptions are "My Name Is Jonas", which was co-written with Jason Cropper and Patrick Wilson, and "Surf Wax America" and "The World Has Turned and Left Me Here", which were composed and written by Cuomo and Wilson. Weezer touches upon various life experiences of Cuomo, including subjects such as his brother's car accident, heartbreak, jealousy, alcohol, and former girlfriends. Weezer incorporates the genres emo, alternative rock, power pop, and pop rock.
      </pre>
    </div>
    <div class="reviews">
      <p class="rewiew-name">REVIEWS</p>
    </div>
    <img class="reviewer-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="reviewer-name">HENRY</p>
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States. <a href="#">SEE MORE</a>
      </pre>
    </div>
    <img class="reviewer-image" alt="Blue Album by Weezer" src="../assets/album_covers/weezer-blue_album.jpeg" />
    <span class="caption">
      <p class="reviewer-name">STEVE</p>
      
    </span>
    <div class="description">
      <pre>
Weezer (commonly known as the Blue Album) is the eponymous debut studio album by American rock band Weezer, released on May 10, 1994 by DGC Records. It was produced by The Cars frontman Ric Ocasek and recorded at Electric Lady Studios in New York City from August to September 1993.

The album reached number sixteen on the US Billboard 200, going on to achieve RIAA triple platinum status. It was supported by the singles "Undone – The Sweater Song", "Buddy Holly", and "Say It Ain't So", which brought Weezer mainstream success, helped by music videos directed by Spike Jonze. By 2009, the album had sold at least 3.3 million copies in the United States. <a href="#">SEE MORE</a>
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
  width: 250px;
  height: 250px;
  float: left;
  padding: 0 10px 0 0;
}

.caption {
  display: inline-block;
}

.album-name, .rewiew-name {
  font-weight: bold;
  font-size: 60px;
  margin: 0 0 0 0px;
  line-height: 60px;
}

.band-name {
  font-weight: bold;
  font-size: 40px;
  margin: 0 0 0 0px;
  line-height: 50px;
}

.genres, .runtime {
  font-weight: bold;
  font-size: 30px;
  margin: 0 0 0 0px;
  line-height: 50px;
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

.reviewer-image {
  width: 100px;
  height: 100px;
  float: left;
  padding: 0 10px 0 0;
}

.reviewer-name {
  font-weight: bold;
  font-size: 40px;
  margin: 0 0 0 0px;
  line-height: 40px;
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
export default {
  name: "AlbumDetails"
};
</script>
