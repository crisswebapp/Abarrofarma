<template>
  <v-col cols="12">
    <v-container>
      <v-simple-table height="500">
        <template v-slot:default>
          <caption class="text-leftgit">
            {{
              titulo
            }}
          </caption>
          <thead>
            <tr>
              <th class="text-left">
                Posicion
              </th>
              <th class="text-left">
                Nombre Producto
              </th>
              <th class="text-left">
                Precio
              </th>
              <th class="text-left">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in productos" :key="item.name">
              <td>{{ index }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.precio }}</td>
              <td>{{ item.cantidad ? item.cantidad : 0 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'ContenedorProductos',
  props: {
    productos: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      titulo: 'Lista de Productos'
    }
  }
}
</script>

<style></style>
