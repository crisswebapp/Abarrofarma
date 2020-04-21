<template>
  <v-col>
    <v-container>
      <v-card v-if="res">
        <v-card-title>Informacion de busqueda</v-card-title>
        <v-row>
          <v-col>
            <span v-if="res.tienda">
              <v-card-text v-if="res.tienda.enOtra" class="text-center">
                No tenemos disponible el producto en esta, pero esta en
                {{ res.tienda.sucursal }} que es la sucursal mas cercana donde
                si tenemos existencia, esta a {{ res.tienda.distancia }}
                kilometros de su ubicacion actual
              </v-card-text>
              <v-card-text v-else class="text-center">
                Disponible en tu misma localidad
              </v-card-text>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text v-if="res.producto">
              Nombre Producto : {{ res.producto.nombre }}
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text v-if="res.producto">
              Cantidad Actual : {{ res.producto.cantidad }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text v-if="res.rBusqueda">
              Pocision : {{ res.rBusqueda.index }}
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text v-if="res.rBusqueda">
              Tiempo Busqueda : {{ res.rBusqueda.tiempo }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'ResultadoBusqueda',
  props: {
    pocision: {
      type: Number,
      default: null
    },
    tiempo: {
      type: Number,
      default: null
    },
    producto: {
      type: Object,
      default: null
    },
    res: {
      type: Object,
      default: null
    }
  }
}
</script>
