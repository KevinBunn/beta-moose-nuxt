<template>
  <v-container class="fill-height gradient" fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" md="6" cols="12">
        <div style="max-width: 100%">
          <img src="/betamoose-logo-white.png" class="landing-img" alt="white moose logo">
        </div>
      </v-col>
      <v-col class="white--text text-center" md="6" cols="12">
        <div class="text-h6 text-sm-h4">
          Latest Release
        </div>
        <div class="text-h3 text-sm-h1">
          Summit <b>EP</b>
        </div>
        <v-row class="mt-2" justify="center">
          <v-col md="3" cols='6'>
            <v-btn color='primary' to="/music/2">
              Listen Now
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      songs: []
    }
  }
}
</script>

<style lang="scss" scoped>
#root {
  height: 100%;
}
.landing-main {
  height: 100%;
  padding: 0 0 36px !important;
}
.gradient {
  background-image: linear-gradient(rgb(54,40,91, 0.80), rgb(240,146,222,0.80)),
  url("/canadaCrop.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.landing-img {
  max-width: 90%;
  max-height: 50vh;
}
sup {
  font-size: .5em;
  top: -.75em;
}
.v-menu {
  display: block;
}

@media screen and (min-width: 960px){
  .landing-img {
    max-width: 90%;
    max-height: 70vh;
  }
}
</style>
