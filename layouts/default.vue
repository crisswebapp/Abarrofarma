<template>
  <v-app>
    <AppNavigation />
    <nuxt />
    <VmFooter />
  </v-app>
</template>

<script>
import AppNavigation from '~/components/header/navbar'
//import VmHeader from '~/components/header/header'
import VmFooter from '~/components/footer/footer'

export default {
  components: { VmFooter, AppNavigation }
}
</script>
