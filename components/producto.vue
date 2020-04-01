<template>
  <span>
    <v-card>
      <v-img :src="producto.image"></v-img>
      <v-card-title>{{ producto.titulo }}</v-card-title>
      <v-card-text> {{ producto.descripcion }}</v-card-text>
      <v-card-actions>
        <v-btn class="my-2" small> <p class="font-weight-bold">{{ btnAgregar }}</p></v-btn>
        <v-spacer></v-spacer>
        <v-icon class="mx-2">mdi-share-variant</v-icon>
      </v-card-actions>
    </v-card>
  </span>
</template>

<script>
export default {
  name: 'VmProducto',
  props: {
    producto: {
      type: Object,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      btnAgregar: 'Agregar producto'
    }
  }
}
</script>
