let busLineal = (valor, array) => {
  let res = {}
  const tInicio = Date.now() / 1000
  let encontrado = false
  let index = 0
  while (!encontrado && index < array.length) {
    if (array[index].nombre === valor) {
      encontrado = true
      res['info'] = array[index]
      res['index'] = index
      res['encontrado'] = encontrado
    } else {
      index += 1
    }
  }

  if (!encontrado) {
    res['encontrado'] = encontrado
  }
  res['tiempo'] = Date.now() / 1000 - tInicio
  return res
}
export default busLineal
