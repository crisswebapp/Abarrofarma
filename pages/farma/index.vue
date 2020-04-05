<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Lista Productos</v-card-title>
      <p>{{ tipoBusqueda }}</p>
      <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :color="color"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
      >
        {{ error }}
        <v-btn dark text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
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
            <v-select
              v-model="tipoBusqueda"
              label="Tipo Busqueda"
              :items="tiposBusqueda"
            ></v-select>
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
          <v-card-title>Informacion de busqueda</v-card-title>
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
        <v-simple-table height="500">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Posicion
                </th>
                <th class="text-left">
                  Nombre Producto
                </th>
                <th class="text-left">
                  precio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="item.name">
                <td>{{ index }}</td>
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
      color: 'error',
      mode: '',
      timeout: 2000,
      x: null,
      y: 'top',
      snackbar: false,
      error: null,
      dataText: null,
      items: null,
      tipoBusqueda: 'Busqueda Sequencial',
      infoBusqueda: {},
      tiposBusqueda: ['Busqueda Sequencial', 'Busqueda Binaria']
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
      this.infoBusqueda = {}
      try {
        switch (this.tipoBusqueda) {
          case 'Busqueda Sequencial':
            this.infoBusqueda = busLineal(data.toLowerCase().trim(), this.items)
            this.snackbar = false
            break
          case 'Busqueda Binaria':
            console.log('Busqueda Binaria')
        }
      } catch (error) {
        this.snackbar = true
        this.error = error
      }
    }
  }
}
</script>
