<template>
  <div id="app">
    <InfoError />
    <router-view></router-view>
   
  </div>
</template>

<script>
import InfoError from './components/global/InfoError'

export default {
  name: 'App',
  props: {
      source: String,
    },
  components: {
    InfoError
  },
  computed: {

  },
  data: () => ({ 
    
    }),
  mounted () {
     
  },
    created () {

    },
}
</script>
