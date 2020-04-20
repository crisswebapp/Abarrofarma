<template>
  <v-app>
    <VmHeader />
     <v-content >
       <nuxt />
     </v-content>
    <VmFooter />
  </v-app>
</template>

<script>
import VmHeader from '~/components/header/header'
import VmFooter from '~/components/footer/footer'

export default {
  components: { VmFooter, VmHeader }
}
</script>


