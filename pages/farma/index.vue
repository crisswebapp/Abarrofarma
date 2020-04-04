<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Lista Productos</v-card-title>
    </v-card>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row align="center">
          <v-col cols="5" sm="6">
            <v-text-field
              v-model="dataText"
              label="Buscar Producto"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select v-model="modelOp" :items="tiposBusqueda"></v-select>
          </v-col>
          <v-col cols="3">
            <v-btn color="indigo" dark small @click="getBusLineal(dataText)">
              Buscar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-card>
          <v-row>
            <v-col>
              <v-card-text> Pocision : {{ infoBusqueda.index }} </v-card-text>
            </v-col>
            <v-col>
              <v-card-text>
                Tiempo Busqueda : {{ infoBusqueda.tiempo }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
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
                <td>{{ item.nombre }}</td>
                <td>{{ item.precio }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { data, busLineal } from '~/store/store'
export default {
  components: {},
  data() {
    return {
      modelOp: 'Busqueda Lineal',
      dataText: null,
      items: null,
      infoBusqueda: {},
      tiposBusqueda: ['Busqueda Lineal', 'Busqueda Binaria']
    }
  },
  created: function() {
    return this.generarData()
  },
  methods: {
    generarData: function() {
      this.items = data().hijos[0].hijos.map(prodcuto => {
        let newprod = {}
        newprod['nombre'] = prodcuto.valor.nombre
        newprod['precio'] = prodcuto.valor.precio
        return newprod
      })
    },
    getBusLineal: function(data) {
      try {
        this.infoBusqueda = busLineal(data, this.items)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
