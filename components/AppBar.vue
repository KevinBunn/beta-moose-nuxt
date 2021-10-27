<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-sm-and-up">
       <!--The Semicolon before a prop means you're passing in code instead of a string-->
      <div style="display: flex; justify-content: center; padding: 20px 0">
        <img style="max-width: 50%; max-height: 9vh" src="/betamoose-small.png" alt="beta moose text logo small">
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item to="/" ripple>
              <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/music/1" ripple>
          <v-list-item-title>Cascade</v-list-item-title>
        </v-list-item>
        <v-list-item to="/music/2" ripple>
          <v-list-item-title>Summit EP</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openShop" ripple>
        <v-list-item-title>Shop</v-list-item-title>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-scroll="onScroll" :color="color" elevate-on-scroll app>
      <v-toolbar-title class="white--text">Beta Moose</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Wrapping them in v-toolbar-items allows the buttons to extend to the top of the bar -->
      <v-toolbar-items>
        <div class="hidden-xs-only">
          <v-btn style="color: white;" tile text height="100%" to="/">Home</v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on" style="height: 100%; color: white;">
                Music
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/music/1" ripple>
                <v-list-item-title>Cascade</v-list-item-title>
              </v-list-item>
              <v-list-item to="/music/2" ripple>
                <v-list-item-title>Summit EP</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            style="color: white;"
            tile
            text
            height="100%"
            href="https://shop.spreadshirt.com/beta-moose/"
            target="_blank"
          >
            Shop
          </v-btn>
        </div>
        <v-app-bar-nav-icon class="hidden-sm-and-up" style="color: white;" @click.native="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    elevate: {
      type: Boolean,
      default: true
    }
  },
  // Local variables declared here
  data () {
    return {
      hasColor: false,
      drawer: false
    }
  },
  // special functions for the DOM that change each time a variable inside them is changed.
  computed: {
    // anytime hasColor changes value, this function is called again.
    color () {
      // primary refers to the theme primary color see /src/plugins/vuetify.js
      if (!this.elevate) {
        return 'primary'
      }
      return this.hasColor ? 'primary' : 'transparent'
    }
  },
  // local functions declared here.
  methods: {
    // Scroll event, the app-bar calls this for each pixel scrolled.
    onScroll () {
      // Set it to change right above the page title
      this.hasColor = window.scrollY > 40
    },
    openShop () {
      window.open('https://shop.spreadshirt.com/beta-moose/')
    }
  }
}
</script>

<style lang="scss" scoped>
//.v-menu {
//  display: block;
//}
</style>
