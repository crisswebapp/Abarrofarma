<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      absolute
      elevate-on-scrollgi
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <nuxt-link class="title-app" to="/">
        <v-toolbar-title class="mx-2" style="color:white">
          Ecomerce App
        </v-toolbar-title>
      </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="hidden-md-and-up"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Home
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Contact
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'VmHeader',
  data() {
    return { drawer: null }
  }
}
</script>

<style scrope>
.title-app {
  text-decoration: None;
  color: white;
}
a {
  text-decoration: none;
  text-decoration-style: solid;
}
</style>
