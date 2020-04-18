<template>
  <v-container fluid>
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
      <Sucursal v-cloak/>
      <ContenedorBuscador @click="hacerBusqueda" />
      <ResultadoBusqueda
        :pocision="infoBusqueda.index"
        :tiempo="infoBusqueda.tiempo"
        :nombre="infoBusqueda.info"
      />
      <ContnedorProductos :productos="productos" />
    </v-row>
  </v-container>
</template>

<script>
import {
  data,
  busLineal,
  busBinaria,
  Ordenar,
  busBinariaRec
} from '~/store/store'
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
  mounted: function() {
    return this.generarData()
  },
  methods: {
    generarData() {
      try {
        let pdata = data().buscar('malacatan')
        this.productos = pdata.hijos[0].hijos.map(producto => {
          let newprod = {}
          newprod['nombre'] = producto.valor.nombre
          newprod['precio'] = producto.valor.precio
          newprod['cantidad'] = producto.valor.cantidad
          return newprod
        })
        this.productos = Ordenar(this.productos)
      } catch (error) {
        console.log(error)
      }
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
          case 'Busqueda Binaria Recursiva':
            this.infoBusqueda = busBinariaRec(
              data.toLowerCase().trim(),
              this.productos,
              0,
              this.productos.length - 1
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
