<template>
  <v-container class="my-10" dense fluid>
    <v-row class="full-height">
      <v-col cols="12">
        <v-card>
          <v-card-actions>
            <v-btn @click="getPosts">
              get posts
            </v-btn>
          </v-card-actions>
          <v-card-title> Lista de Productos {{ posts.title }} </v-card-title>
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
      posts: {},
      title: null,
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
        },
        {
          id: 5,
          titulo: 'Fresas',
          descripcion: 'Estas son unas Fresas bonitas',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        {
          id: 6,
          titulo: 'Uvas',
          descripcion: 'Estas son unas Uvas bonitas',
          image: 'https://bulma.io/images/placeholders/1280x960.png'
        }
      ]
    }
  },
  mounted() {
    return this.getPosts()
  },
  methods: {
    async getPosts() {
      let posts = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/todos/1'
      )
      console.log(posts)
      this.posts = posts
    }
  }
}
</script>
