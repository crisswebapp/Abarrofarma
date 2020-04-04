<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Lista Productos</v-card-title>
    </v-card>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Nombre Producto
                </th>
                <th class="text-left">
                  precio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.valor.nombre }}</td>
                <td>{{ item.valor.precio }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { data } from '~/store/store'
export default {
  components: {},
  data() {
    return {
      items: null
    }
  },
  created: function() {
    return this.generarData()
  },
  methods: {
    generarData: function() {
      this.items = data().hijos[0].hijos
    }
  }
}
</script>
