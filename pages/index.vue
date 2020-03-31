<template>
  <div class="container">
    <div>
      <h1 class="title">
        AbarroFarma
      </h1>
      <h2 class="subtitle">
        Bienvenidos a AbarroFarma
      </h2>
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        class="elevation-1"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        {
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Nombre Producto', value: 'nProducto' },
        { text: 'Descripcion Producto', value: 'dProducto' },
        { text: 'Departamento Producto', value: 'depProducto' },
        { text: 'Precio Producto', value: 'pProducto' }
      ],
      desserts: [
        {
          nProducto: 'Acetaminofen',
          dProducto: 'Jarabe 250 ml',
          depProducto: 'Farmacia',
          pProducto: 15
        },
        {
          nProducto: 'Trimetose',
          dProducto: 'Jarabe 250 ml',
          depProducto: 'Farmacia',
          pProducto: 10
        },
        {
          nProducto: 'Amoxicilina',
          dProducto: 'Jarabe 125 ml',
          depProducto: 'Farmacia',
          pProducto: 12
        },
        {
          nProducto: 'Azucar',
          dProducto: 'Una libra',
          depProducto: 'Abarrote',
          pProducto: 4
        },
        {
          nProducto: 'Arroz',
          dProducto: 'Una Libra',
          depProducto: 'Abarrote',
          pProducto: 3
        }
      ]
    }
  }
}
</script>
