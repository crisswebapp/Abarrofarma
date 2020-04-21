<template>
  <v-container>
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
      <Sucursal @change="actualizarProd" />
      <ContenedorBuscador @click="hacerBusqueda" />
      <ResultadoBusqueda :res="infoBusqueda" />
      <ContnedorProductos :productos="productos" />
    </v-row>
  </v-container>
</template>

<script>
import { getSucursal, getData } from '~/store/store'
import busLineal from '~/store/Busquedas/BusquedaLineal'
import busBinaria from '~/store/Busquedas/BusquedaBinaria'
import busBinariaRec from '~/store/Busquedas/BusquedaBinariaRecursiva'
import Sucursal from '~/components/abarrofarma/sucursal'
import ContnedorProductos from '~/components/abarrofarma/contenedorProductos'
import ResultadoBusqueda from '~/components/abarrofarma/resultadoBusqueda'
import ContenedorBuscador from '~/components/abarrofarma/contenedorBuscador'
export default {
  components: {
    ContnedorProductos,
    ResultadoBusqueda,
    ContenedorBuscador,
    Sucursal
  },
  data() {
    return {
      sucursal: 'Malacatan',
      productos: [],
      infoBusqueda: {},
      noti: {
        msg: '',
        color: 'error',
        timeout: 2500,
        activar: false
      }
    }
  },
  mounted: function() {
    return this.generarData()
  },
  methods: {
    generarData() {
      try {
        this.productos = []
        this.productos = getData(this.sucursal)
      } catch (error) {
        console.log(error)
      }
    },
    hacerBusqueda(data, tBusqueda) {
      this.infoBusqueda = {}
      // eslint-disable-next-line no-unused-vars
      let res = null
      try {
        switch (tBusqueda) {
          case 'Busqueda Lineal':
            res = getSucursal(
              this.sucursal,
              data.toLowerCase().trim(),
              busLineal
            )
            this.infoBusqueda = res
            break
          case 'Busqueda Binaria':
            res = getSucursal(
              this.sucursal,
              data.toLowerCase().trim(),
              busBinaria
            )
            this.infoBusqueda = res
            this.noti.activar = false
            break
          case 'Busqueda Binaria Recursiva':
            res = getSucursal(
              this.sucursal,
              data.toLowerCase().trim(),
              busBinariaRec
            )
            this.infoBusqueda = res
            this.noti.activar = false
            break
        }
      } catch (error) {
        this.noti.activar = true
        this.noti.msg = error.message
      }
    },
    actualizarProd(mun) {
      this.sucursal = mun
      this.generarData()
    }
  }
}
</script>
