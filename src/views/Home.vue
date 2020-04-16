<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <layout-logout/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LayoutLogout from '@/components/layout/BtnLogout.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LayoutLogout
  }
}
</script>
