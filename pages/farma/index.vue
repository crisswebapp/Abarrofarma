<template>
  <v-container class="fill-height" fluid>
    <p>resultado = {{ extencion }}</p>
    <v-row align="center" justify="center">
      <v-col>
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
