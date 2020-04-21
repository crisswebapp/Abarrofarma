let busBinaria = (valor, array) => {
  const tInicio = Date.now() / 1000
  let res = {}
  let inicio = 0
  let final = array.length - 1
  let encontrado = false
  let centro
  while (encontrado === false && inicio <= final) {
    centro = Math.floor((inicio + final) / 2)
    if (array[centro].nombre === valor) {
      encontrado = true
      res['info'] = array[centro]
      res['index'] = centro
      res['encontrado'] = encontrado
    } else if (array[centro].nombre > valor) {
      final = centro - 1
    } else {
      inicio = centro + 1
    }
  }
  if (!encontrado) {
    res['encontrado'] = encontrado
  }
  res['tiempo'] = Date.now() / 1000 - tInicio
  return res
}

export default busBinaria
