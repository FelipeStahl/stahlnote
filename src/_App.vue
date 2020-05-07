<template>
  <v-app id="inspire">
    <base-spinner/>
    <layout-notification/>
    <layout-navigation :drawer="drawer"/>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <router-view />
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNotification from './components/layout/LayoutNotification'
import LayoutNavigation from './components/layout/LayoutNavigation'

export default {
  name: 'App',
  props: {
      source: String,
    },
  components: {
    BaseSpinner,
    LayoutNotification,
    LayoutNavigation
  },
  data: () => ({ 
    isLogged: false,
    drawer: true,
    }),
  mounted () {
     this.$root.$emit('Spinner::hide')
    /*this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user

      this.$router.push({ name: window.uid ? 'home' : 'login' })

      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
    })*/
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  color: var(--light);
  background-color: var(--darker);
  .navigation-sidebar {
    background-color: var(--dark-medium);
    .app-title {
      font-size: 20pt;
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>
