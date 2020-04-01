<template>
  <v-container class="my-5" fluid>
    <v-row class="full-height">
      <v-col cols="12">
        <v-card>
          <v-card-title>Lista de Productos</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="stretch">
      <template v-for="item in listaProductos">
        <v-col :key="item.id" cols="6" sm="4" md="3" lg="3" align-end flexbox>
          <VmProducto :image="item.image" :producto="item" />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import VmProducto from '~/components/producto'
export default {
  name: 'VmContenedorProductos',
  components: { VmProducto },
  data() {
    return {
      listaProductos: [
        {
          id: 1,
          titulo: 'Manzanas',
          descripcion: 'Estas son unas manzanas bonitas',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        {
          id: 2,
          titulo: 'Bananos',
          descripcion: 'Estas son unos bananos bonitos',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        {
          id: 3,
          titulo: 'Fresas',
          descripcion: 'Estas son unas Fresas bonitas',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        {
          id: 4,
          titulo: 'Uvas',
          descripcion: 'Estas son unas Uvas bonitas',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        }
      ]
    }
  }
}
</script>
