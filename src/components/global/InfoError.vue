<template>
    <v-snackbar
      v-model="snackbar.showing"
    >
      {{ snackbar.text }}
      <v-btn
        color="pink"
        text
        @click="snackbar.showing = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    computed: {
        ...mapState(["snackbar"])
    },
    data: () => ({
      
    }),
  }
</script>