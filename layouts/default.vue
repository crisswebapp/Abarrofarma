<template>
  <v-app>
    <VmHeader />
    <v-content v-cloak>
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

<style>
[v-cloak] > * { display:none; }
<style/>

