<template>
  <span>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="brown lighten-1"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              <router-link :to="item.url" style="color: white">
                {{ item.title }}
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="brown darken-3" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/" style="color:white">
        <v-toolbar-title class="title">
          {{ appTitle }}
        </v-toolbar-title>
      </router-link>
      <v-btn text class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn text class="hidden-sm-and-down" to="/signin">SIGN IN</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join">
        JOIN
      </v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'Meal Prep',
      drawer: false,
      items: [
        { title: 'Menu', url: '/menu' },
        { title: 'Sign In', url: '/signin' },
        { title: 'Join', url: '/join' }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
