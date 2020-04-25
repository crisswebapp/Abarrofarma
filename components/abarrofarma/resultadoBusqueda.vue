<template>
  <v-col>
    <v-container>
      <v-card v-if="res.tienda">
        <v-card-title>Informacion de busqueda</v-card-title>
        <v-row>
          <v-col>
            <span v-if="res.tienda">
              <v-card-text
                v-if="res.tienda.enOtra"
                class="text-center font-weight-black"
              >
                Producto no disponible en esta tienda!
                <p class="red--text darker-4">
                  Lo puedes encontrar en :
                  {{ res.tienda.sucursal + ' a ' + res.tienda.distancia }}
                  kilometros de su ubicacion actual
                </p>
              </v-card-text>
              <v-card-text v-else class="text-center font-weight-black">
                Disponible en tu misma localidad
              </v-card-text>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text v-if="res.producto" class="font-weight-bold">
              Nombre Producto : {{ res.producto.nombre }}
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text v-if="res.producto" class="font-weight-bold">
              Cantidad Actual : {{ res.producto.cantidad }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text v-if="res.rBusqueda" class="font-weight-bold">
              Pocision : {{ res.rBusqueda.index }}
            </v-card-text>
          </v-col>
          <v-col>
            <v-card-text v-if="res.rBusqueda" class="font-weight-bold">
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
