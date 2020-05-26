<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col>
                <p>Busqueda en lista</p>
                <v-text-field
                  v-model="bValue"
                  label="Ingrese numero a buscar"
                />
                <v-btn @click="buscar">
                  Buscar
                </v-btn>
              </v-col>
              <v-col>
                <p>
                  <b>{{ bResultado }}</b>
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="value"
              label="Ingrese un numero"
              dense
              @keypress.enter="addLista"
            />
            <v-btn @click="addLista">
              Agregar
            </v-btn>
            <v-simple-table height="25rem">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Numeros</th>
                </tr>
              </thead>
              <tbody style="height:100rem">
                <tr v-for="(item, index) in getLista" :key="index">
                  <td>
                    {{ index }}
                  </td>
                  <td>
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <client-only>
              <p>
                <b>Resultados Estadisticos </b><br />
                <b>Cantidad Datos: </b> {{ getNdatos }}<br />
                <b>Media: </b>{{ media }}<br />
                <b>Moda: </b>{{ moda }}<br />
                <b>Mediana: </b>{{ mediana }} <br />
                <b>Cuartil 1: </b>{{ cuartil_1 }}<br />
                <b>Cuartil 2: </b>{{ cuartil_2 }}<br />
                <b>Cuartil 3: </b>{{ cuartil_3 }}<br />
                <b>Cuartil 4: </b>{{ cuartil_4 }}<br />
                <b>Percentil 1: </b>{{ percentil_1 }}<br />
                <b>Percentil 2: </b>{{ percentil_2 }}
              </p>
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //Todos los datos usados en el programa
      lista: [],
      bValue: '',
      bResultado: '',
      value: '',
      media: '',
      mediana: '',
      moda: '',
      cuartil_1: '',
      cuartil_2: '',
      cuartil_3: '',
      cuartil_4: '',
      percentil_1: '',
      percentil_2: ''
    }
  },
  computed: {
    ///Propiedad para obtener la lista de datos
    getLista() {
      return this.lista
    },
    //Propiedad para obtener la cantidad de datos
    getNdatos() {
      return this.lista.length
    }
  },
  methods: {
    //Metodo para agregar un nuevo dato a la lista
    addLista() {
      //Verificamos si el dato es numerico antes de agregarlo
      if (this.value && !isNaN(this.value)) {
        this.lista.push(parseInt(this.value))
        this.value = ''
        //Calculamos todos los datos estadisticos
        this.getMediana()
        this.getMedia()
        this.getModa()
        this.getCuartiles()
      }
    },
    //Metodo para obtener la mediana
    getMediana() {
      let mediana
      let lista = this.getLista
      lista = lista.sort((a, b) => a - b)
      if (lista.length !== 0) {
        let mid = Math.floor(lista.length / 2)
        mediana =
          lista.length % 2 !== 0
            ? lista[mid]
            : (lista[mid - 1] + lista[mid]) / 2
      }
      this.mediana = mediana
    },
    //Metodo para obtener la media
    getMedia() {
      let media
      let lista = this.getLista
      lista = lista.sort((a, b) => a - b)
      if (lista.length !== 0) {
        media = lista.reduce((val1, val2) => (val1 += val2)) / lista.length
      }
      this.media = media.toFixed(2)
    },
    //Metodo para obtener la moda
    getModa() {
      let moda
      let lista = this.getLista
      lista = lista.sort((a, b) => a - b)
      if (lista.length !== 0) {
        let map = new Map()
        let maxFreq = 0
        for (const item of lista) {
          let freq = map.has(item) ? map.get(item) : 0
          freq++
          if (freq > maxFreq) {
            maxFreq = freq
            moda = item
          }
          map.set(item, freq)
        }
      }
      this.moda = moda
    },
    /*Metodo que calcula los cuadriles basados en la funcion de percentiles 
    sabiendo que los cuadriles 1,2,3 son los percentiles 25,50,75 */
    getCuartiles() {
      this.cuartil_1 = this.genPercentil(25)
      this.cuartil_2 = this.genPercentil(50)
      this.cuartil_3 = this.genPercentil(75)
      this.cuartil_4 = this.lista[this.lista.length - 1]
      this.percentil_1 = this.genPercentil(1)
      this.percentil_2 = this.genPercentil(2)
    },
    //Metodo para obtener el percentil desde el 1 hasta el 99
    genPercentil(p) {
      let lista = this.getLista
      let percentil
      lista = lista.sort((a, b) => a - b)
      if (lista.length !== 0) {
        let index = (p / 100) * lista.length
        if (Math.floor(index) === index) {
          percentil = (lista[index - 1] + lista[index]) / 2
        } else {
          percentil = lista[Math.floor(index)]
        }
      }
      return percentil
    },
    //Metodo para buscar un dato, usando la busqueda lineal
    buscar() {
      let lista = this.lista
      let value = parseInt(this.bValue)
      let index = 0
      let encontrado = false
      lista = lista.sort((a, b) => a - b)
      while (!encontrado && index < lista.length) {
        if (lista[index] === value) {
          encontrado = true
        } else {
          index += 1
        }
      }
      if (encontrado) {
        this.bResultado = `El numero esta en el index: ${index}`
      } else {
        this.bResultado = `El numero no esta en la lista`
      }
    }
  }
}
</script>
