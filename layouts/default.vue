<template>
  <v-app dark>
<!--    <v-navigation-drawer-->
<!--      v-model="drawer"-->
<!--      :mini-variant="miniVariant"-->
<!--      :clipped="clipped"-->
<!--      fixed-->
<!--      app-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact-->
<!--        >-->
<!--          <v-list-item-action>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title v-text="item.title" />-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <app-bar></app-bar>
    <v-main style="padding-top: 0">
      <Nuxt />
    </v-main>
<!--    <v-navigation-drawer-->
<!--      v-model="rightDrawer"-->
<!--      :right="right"-->
<!--      temporary-->
<!--      fixed-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item @click.native="right = !right">-->
<!--          <v-list-item-action>-->
<!--            <v-icon light>-->
<!--              mdi-repeat-->
<!--            </v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <v-footer absolute color="primary" v-if="visible" app>
      <v-btn icon color="white" href="https://twitter.com/betamoosemusic" target="_blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon color="white" href="https://www.facebook.com/BetaMoose-101826911519751" target="_blank">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon color="white" href="https://www.instagram.com/betamoose" target="_blank">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
export default {
  components: {
    AppBar
  },
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
