<template>
  <v-container class="pt-0 main-container" fluid>
    <v-row id="page-title" class="fill-height" align="center" justify="center" no-gutters>
      <v-col class="mx-auto page-name text-center white--text" style="display: block">
        Music
      </v-col>
    </v-row>
    <v-row style="height: 100%;" align="center" no-gutters>
      <v-col class="page-content mx-auto">
        <v-card class="py-sm-6 py-lg-10 mb-3 elevation-8" height="100%">
          <v-card-text class="mx-auto px-3 px-md-4 px-lg-4 card-text">
            <v-row>
              <v-col cols="12" sm="5" md="4" lg="4" class="flex-lg-shrink-1 flex-lg-grow-0">
                <img :src="`/${release.name}.JPG`" style="max-width: 100%" alt="album cover"/>
              </v-col>
              <v-col class="px-6 flex-lg-grow-1 flex-lg-shrink-0">
                <v-row no-gutters wrap>
                  <v-col cols="12" class="hidden-sm-and-down song-title display-2">
                    {{ release.name }}
                  </v-col>
                  <v-col md="12" cols="12" class="my-3">
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" v-for="(song, index) in songs" :key="index">
                    <song-player
                      v-if="waveSurferReady"
                      :song-name="song.name"
                      :release-type="release.type"
                      :bus="bus"
                      @playing="pauseOtherSongs"
                    />
                    <v-divider v-if="index < 4" class="my-1"></v-divider>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="mx-auto" cols="12">
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="https://assets.ffm.to/images/logo/music-service_spotify.png" style="height: 32px;" alt="spotify logo"/>
                  <template v-if="release.spotify_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.spotify_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
                <v-divider class="my-2 mx-3"></v-divider>
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="https://assets.ffm.to/images/logo/music-service_apple.png" style="height: 32px;" alt="apple music logo"/>
                  <template v-if="release.apple_music_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.apple_music_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
                <v-divider class="my-2 mx-3"></v-divider>
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="/music-service_youtube.png" style="height: 28px;" alt="youtube music logo"/>
                  <template v-if="release.youtube_music_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.youtube_music_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
                <v-divider class="my-2 mx-3"></v-divider>
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="https://assets.ffm.to/images/logo/music-service_amazon.png" style="height: 32px;" alt="amazon music logo"/>
                  <template v-if="release.amazon_music_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.amazon_music_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
                <v-divider class="my-2 mx-3"></v-divider>
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="https://assets.ffm.to/images/logo/music-service_tidal.png" style="height: 32px;" alt="tidal logo"/>
                  <template v-if="release.tidal_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.tidal_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
                <v-divider class="my-2 mx-3"></v-divider>
                <v-row class="px-3" no-gutters justify="space-between">
                  <img src="https://assets.ffm.to/images/logo/music-service_deezer.png" style="height: 32px;" alt="deezer logo"/>
                  <template v-if="release.deezer_url === ''">
                    <v-btn class="my-auto" disabled small>Coming Soon</v-btn>
                  </template>
                  <template v-else>
                    <v-btn class="my-auto" small :href="release.deezer_url" target="_blank">Listen Now</v-btn>
                  </template>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import SongPlayer from '../../components/SongPlayer.vue'
export default {
  name: 'Music',
  components: {
    SongPlayer
  },
  data () {
    return {
      waveSurferReady: false,
      songs: {},
      release: {},
      bus: new Vue()
    }
  },
  methods: {
    updateSongs () {
      this.$axios.get(`/api/releases/${this.$route.params.release}`).then((response) => {
        console.log(response)
        this.release = response.data
      })
      this.$axios.get(`/api/songs/${this.$route.params.release}`).then((response) => {
        console.log(response)
        this.songs = response.data
      })
    },
    pauseOtherSongs (songName) {
      this.bus.$emit('pause-other-songs', songName)
    }
  },
  mounted() {
    // if head script has already been loaded
    if (WaveSurfer) {
      this.waveSurferReady = true
    }
    this.updateSongs()
  },
  watch: {
    '$route' (to, from) {
      this.updateSongs()
    }
  },
  head () {
    return {
      script: [
        {
          hid: 'wavesurfer.js',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/5.2.0/wavesurfer.min.js',
          defer: true,
          // Changed after script load
          callback: () => {
            // console.log(WaveSurfer)
            this.waveSurferReady = true
            // this.$nuxt.$emit('wavesurfer-ready', WaveSurfer)
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$bp-sm: 600px;
$bp-md: 960px;
$bp-lg: 1264px;

.main-container {
  z-index: 10;
  // margin-top: -64px;
  background-size: cover;
  background-image: linear-gradient(rgb(54,40,91, 0.80), rgb(240,146,222,0.80)), url("/canadaCrop.jpg");
}
#page-title {
  height: 30vh;
  // background-color: #392F5A;
}
.page-content {
  max-width: 90%;
  // margin: auto;
}
.page-name {
  letter-spacing: 4px;
  font-size: 3.75rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  max-width: 95%;
}
.song-title {
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}
@media (max-width: $bp-sm) {
  .card-title {
    max-width: 95%;
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
  }
  .card-text {
    max-width: 95%;
  }
  .song-title {
    font-size: 2.5rem !important;
  }
}
@media (min-width: $bp-sm) and (max-width: $bp-md) {
  .card-text {
    max-width: 90%;
  }
}
@media (min-width: $bp-md) and (max-width: $bp-lg) {
  .card-text {
    max-width: 85%;
  }
}
@media(min-width: $bp-lg) {
  .card-title {
    max-width: 66%;
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Roboto", sans-serif !important;
  }
  .card-text {
    max-width: 66%;
  }
  .card-subtitle {
    font-size: 1.25rem;
  }
  .song-title {
    font-size: 3rem !important;
  }
}
</style>
