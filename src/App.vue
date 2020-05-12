<template>
  <v-app id="inspire">
    <InfoError />
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      v-if="conectado"
    >
      <v-list dense>
        <v-list-item link router to="/about">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="conectado"/>
      <v-toolbar-title>Stahlnote</v-toolbar-title>
      <v-spacer />
      <v-btn @click="logout" v-if="conectado">Sair</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from './firebase'
import InfoError from './components/global/InfoError'
import {mapState} from 'vuex';
export default {
  name: 'App',
  props: {
      source: String,
    },
  components: {
    InfoError
  },
  computed: {
    ...mapState(["conectado"])
  },
  data: () => ({ 
    drawer: null,
    }),
  mounted () {
     
  },
    created () {

    },
    methods: {
        logout() {
            firebase.auth().signOut()
            this.$store.dispatch('setConectado', false)
            this.$router.push('/login')
        }
    }
}
</script>
