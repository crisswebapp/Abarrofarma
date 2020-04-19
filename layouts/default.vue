<template>
  <v-app>
    <VmHeader />
    <div v-cloak>
      <v-content >
        <nuxt />
      </v-content>
    </div>
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

