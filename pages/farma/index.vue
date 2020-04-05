<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Lista Productos</v-card-title>
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
      <ContenedorBuscador @click="hacerBusqueda" />
      <ResultadoBusqueda
        :pocision="infoBusqueda.index"
        :tiempo="infoBusqueda.tiempo"
      />
      <ContnedorProductos :productos="productos" />
    </v-row>
  </v-container>
</template>

<script>
import { data, busLineal } from '~/store/store'
import ContnedorProductos from '~/components/abarrofarma/contenedorProductos'
import ResultadoBusqueda from '~/components/abarrofarma/resultadoBusqueda'
import ContenedorBuscador from '~/components/abarrofarma/contenedorBuscador'
export default {
  components: { ContnedorProductos, ResultadoBusqueda, ContenedorBuscador },
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
      productos: null,
      infoBusqueda: {}
    }
  },
  created: function() {
    return this.generarData()
  },
  methods: {
    generarData: function() {
      this.productos = data().hijos[0].hijos.map(prodcuto => {
        let newprod = {}
        newprod['nombre'] = prodcuto.valor.nombre
        newprod['precio'] = prodcuto.valor.precio
        return newprod
      })
    },
    hacerBusqueda: function(data, tBusqueda) {
      this.infoBusqueda = {}
      try {
        switch (tBusqueda) {
          case 'Busqueda Sequencial':
            this.infoBusqueda = busLineal(
              data.toLowerCase().trim(),
              this.productos
            )
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
