let grafo = {
  Malacatan: { 'San Pablo': 9.4, Catarina: 10.4 },
  Catarina: { Malacatan: 10.4, 'Tecun Uman': 22 },
  'Tecun Uman': { Catarina: 22 }, //Coatepeque: 34.4 },
  /** 
  Coatepeque: { 'Tecun Uman': 34.4, Retalhuleo: 40.2, Colomba: 16.9 },
  Retalhuleo: {
    Coatepeque: 40.2,
    Mazatenango: 27.5,
    Zapotitlan: 14.5,
    'Las Pilas': 11.3
  },
  Mazatenango: { Retalhuleo: 27.5, Zapotitlan: 16.9 },
  Zapotitlan: { Mazatenango: 16.9, Retalhuleo: 14.5 },
  'Las Pilas': { Retalhuleo: 11.3 },
  Colomba: { Coatepeque: 16.9, Quetzaltenango: 43 },
  Quetzaltenango: {
    Colomba: 43,
    'San Carlos Sija': 23.2,
    Olintepeque: 10.9,
    Salcaja: 9.7,
    'San Marcos': 50.7
  },
  'San Carlos Sija': { Quetzaltenango: 23.2 },
  Olintepeque: { Quetzaltenango: 10.9, Salcaja: 6 },
  Salcaja: { Quetzaltenango: 9.7, Olintepeque: 6 },
  **/
  'San Marcos': { Quetzaltenango: 50.7, 'San Rafael': 24.3, Malacatancito: 94 },
  'San Rafael': { 'San Marcos': 24.3, 'San Pablo': 14.7 },
  'San Pablo': {
    'San Rafael': 14.7,
    Malacatan: 9.4
  } /**,
  Malacatancito: { 'San Marcos': 94, Huehuetenango: 13 },
  Huehuetenango: { Malacatancito: 13 }
  */
}
export default grafo
