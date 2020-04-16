<template>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link
          exact
          :key="i"
          class="nav-link"
          exact-active-class="active"
          :to="{ name: router.name }"
          v-for="(router, i) in routerLinks"
        >
          <v-list-item-action>
            <v-icon>{{ router.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ router.meta.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <layout-new-expense/>
      <layout-logout/>
    </v-navigation-drawer>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNewExpense from './LayoutNewExpense'

export default {
  components: {
    LayoutLogout,
    LayoutNewExpense
  },
props: {
   drawer: {
    type: Boolean,
    required: true,
    default: null
   }
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'login')
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  margin-left: -15px;
  width: calc(100% + 30px);
  height: calc(100vh - 49px);
  .nav-link {
    color: var(--white);
    transition: .4s;
    &.active {
      color: var(--featured);
      background-color: transparent;
    }
    &:hover {
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>
