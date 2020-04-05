<template>
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
          <tr v-for="(item, index) in productos" :key="item.name">
            <td>{{ index }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-col>
</template>

<script>
export default {
  name: 'ContenedorProductos',
  props: {
    productos: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>

<style></style>
