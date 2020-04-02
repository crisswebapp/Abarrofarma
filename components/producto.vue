<template>
  <span>
    <v-card>
      <v-img :src="producto.image"></v-img>
      <v-card-title>{{ producto.titulo }}</v-card-title>
      <v-card-text> {{ producto.descripcion }}</v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="12" sm="6" class="ma-1">
            <v-btn class="my-2 caption" small>
              {{ btnAgregar }}
            </v-btn>
            <v-icon>mdi-share-variant</v-icon>
          </v-col>
        </v-row>
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
