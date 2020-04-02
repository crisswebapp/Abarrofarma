<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-up"
      disable-resize-watcher
      absolute
      temporary
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
    <v-toolbar color="indigo" dense dark>
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
    </v-toolbar>
  </div>
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
