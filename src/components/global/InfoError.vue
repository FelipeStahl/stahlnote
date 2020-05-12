<template>
    <v-snackbar top
      color="#8c0000"
      v-model="infoError.showing"
      vertical
    >
      {{ infoError.text }}
      <v-btn     
        text
        @click="infoError.showing = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    computed: {
        ...mapState(["infoError"])
    },
    data: () => ({
      
    }),
  }
</script>