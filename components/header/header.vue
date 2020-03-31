<template>
  <v-container class="full-height" fluid>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
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
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>
        <nuxt-link class="title-app" to="/">
          <h1>Ecomerce App</h1>
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'VmHeader',
  data() {
    return { drawer: false }
  }
}
</script>

<style scrope>
.title-app {
  text-decoration: None;
  color: white;
}
h1 {
  color: white;
  font-size: 24px;
}
</style>
