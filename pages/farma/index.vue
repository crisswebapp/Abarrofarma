<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Abarrofarma</v-card-title>
    </v-card>
    <v-snackbar
      v-model="noti.activar"
      :color="noti.color"
      :timeout="noti.timeout"
      :top="true"
    >
      {{ noti.msg }}
      <v-btn dark text @click="noti.activar = false">
        Close
      </v-btn>
    </v-snackbar>
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
import { data, busLineal, busBinaria } from '~/store/store'
import ContnedorProductos from '~/components/abarrofarma/contenedorProductos'
import ResultadoBusqueda from '~/components/abarrofarma/resultadoBusqueda'
import ContenedorBuscador from '~/components/abarrofarma/contenedorBuscador'
export default {
  components: {
    ContnedorProductos,
    ResultadoBusqueda,
    ContenedorBuscador
  },
  data() {
    return {
      productos: null,
      infoBusqueda: {},
      noti: {
        msg: '',
        color: 'error',
        timeout: 2500,
        activar: false
      }
    }
  },
  created: function() {
    return this.generarData()
  },
  methods: {
    generarData() {
      this.productos = data().hijos[0].hijos.map(prodcuto => {
        let newprod = {}
        newprod['nombre'] = prodcuto.valor.nombre
        newprod['precio'] = prodcuto.valor.precio
        return newprod
      })
      this.productos = this.productos.sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      )
    },
    hacerBusqueda(data, tBusqueda) {
      this.infoBusqueda = {}
      try {
        switch (tBusqueda) {
          case 'Busqueda Lineal':
            this.infoBusqueda = busLineal(
              data.toLowerCase().trim(),
              this.productos
            )
            this.noti.activar = false
            break
          case 'Busqueda Binaria':
            this.infoBusqueda = busBinaria(
              data.toLowerCase().trim(),
              this.productos
            )
            this.noti.activar = false
            break
        }
      } catch (error) {
        this.noti.activar = true
        this.noti.msg = error
      }
    }
  }
}
</script>
