<template>
  <v-col cols="12">
    <v-row align="center">
      <v-col cols="5" sm="6">
        <v-text-field
          v-model="textoBuscador"
          label="Buscar Producto"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="tipoBusqueda"
          label="Tipo Busqueda"
          :items="tiposBusqueda"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-btn color="indigo" dark small @click="emitClick">
          Buscar
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: 'ContenedorBuscador',
  data() {
    return {
      textoBuscador: '',
      tipoBusqueda: 'Busqueda Lineal',
      tiposBusqueda: ['Busqueda Lineal', 'Busqueda Binaria']
    }
  },
  methods: {
    emitClick() {
      this.$emit('click', this.textoBuscador, this.tipoBusqueda)
    }
  }
}
</script>
