<template>
  <v-container class="pa-0" fluid>
    <v-row align="center" no-gutters>
      <v-col class="flex-shrink-1 flex-grow-0">
        <v-btn color="secondary" :loading="loading" icon @click="play" v-if="!playing"><v-icon>mdi-play</v-icon></v-btn>
        <v-btn color="secondary" icon @click="pause" v-if="playing"><v-icon>mdi-pause</v-icon></v-btn>
      </v-col>
      <v-col class="flex-grow-1 flex-shrink-0">
        {{ songName }}
      </v-col>
      <v-col class="text-right flex-shrink-1 flex-grow-0" :id="`${songNameFormatted}-duration`">
        0:00
      </v-col>
    </v-row>
    <v-row v-show="releaseType === 'single'" no-gutters>
      <v-col class="hidden-sm-and-down mb-3" :id="`${songNameFormatted}-waveform`">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import WaveSurfer from "wavesurfer.js/dist/wavesurfer";
export default {
  name: 'SongPlayer',
  props: {
    songName: {
      required: true,
      type: String
    },
    releaseType: {
      require: true,
      type: String
    },
    bus: {
      type: Object
    }
  },
  data () {
    return {
      wavesurfer: {},
      sprite: {},
      playing: false,
      durationText: {},
      loading: true
    }
  },
  computed: {
    songNameFormatted () {
      // console.log(this.songName.replace(/ /g, '-'))
      return this.songName.replace(/ /g, '-')
    }
  },
  methods: {
    play () {
      this.$emit('playing', this.songName)
      this.wavesurfer.play()
      this.playing = true
    },
    pause () {
      this.wavesurfer.pause()
      this.playing = false
    },
    /**
     * Format the time from seconds to M:SS.
     * @param  {Number} secs Seconds to format.
     * @return {String}      Formatted time.
     */
    formatTime (secs) {
      const minutes = Math.floor(secs / 60) || 0
      const seconds = (secs - minutes * 60) || 0

      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    },
    initializeWavesurfer () {
      this.durationText = document.getElementById(`${this.songNameFormatted}-duration`)
      this.wavesurfer = WaveSurfer.create({
        container: `#${this.songNameFormatted}-waveform`,
        scrollParent: false
      })
      this.wavesurfer.load(`/${this.songName}.wav`)
      this.wavesurfer.setProgressColor(this.$vuetify.theme.themes.dark.secondary)
      this.wavesurfer.setCursorColor(this.$vuetify.theme.themes.dark.accent)

      this.wavesurfer.on('ready', () => {
        this.loading = false
        this.durationText.innerHTML = this.formatTime(Math.round(this.wavesurfer.getDuration()))
      })

      this.wavesurfer.on('audioprocess', () => {
        this.durationText.innerHTML = this.formatTime(Math.round(this.wavesurfer.getDuration() - this.wavesurfer.getCurrentTime()))
      })
    }
  },
  created () {
    this.bus.$on('pause-other-songs', (songName) => {
      if (this.songName !== songName) {
        this.pause()
      }
    })
  },
  mounted () {
    this.initializeWavesurfer()
  },
  beforeDestroy () {
    this.wavesurfer.destroy()
  }
}
</script>

<style scoped>

</style>
