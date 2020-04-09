<template>
  <v-col>
    <v-card>
      <v-card-title>Sucursales</v-card-title>
      <v-row>
        <v-col>
          <v-select
            v-model="dep"
            label="Departamento"
            :items="departamentos"
            @change="actMun"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="mun"
            label="Municipio"
            :items="municipios[dep]"
            @change="emitChange"
          ></v-select>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Sucursal',
  data() {
    return {
      dep: 'San Marcos',
      mun: 'Malacatan',
      departamentos: [
        'San Marcos',
        'Huehuetenango',
        'Quetzaltenango',
        'Retalhuleu'
      ],
      municipios: {
        'San Marcos': [
          'San Marcos',
          'San pablo',
          'Malacatan',
          'Catarina',
          'Tecun'
        ],
        Huehuetenango: [
          'Huehuetenango',
          'Chiantla',
          'Paquix',
          'Malacatancito',
          'Aguacatan'
        ],
        Retalhuleu: [
          'Retalhuleu',
          'Las pilas',
          'Zapotitlan',
          'Mazatenango',
          'Colomba'
        ],
        Quetzaltenango: [
          'Quetzaltenango',
          'Salcaja',
          'San carlos sija',
          'Olintepeque'
        ]
      }
    }
  },
  methods: {
    emitChange() {
      this.$emit('change', this.mun)
    },
    actMun() {
      this.mun = this.municipios[this.dep][0]
    }
  }
}
</script>
