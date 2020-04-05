<template>
  <v-col>
    <v-card>
      <v-card-title>Informacion de busqueda</v-card-title>
      <v-row>
        <v-col>
          <v-card-text> Pocision : {{ pocision }} </v-card-text>
        </v-col>
        <v-col>
          <v-card-text> Tiempo Busqueda : {{ tiempo }} </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ResultadoBusqueda',
  props: {
    pocision: {
      type: Number,
      default: null
    },
    tiempo: {
      type: Number,
      default: null
    }
  }
}
</script>
