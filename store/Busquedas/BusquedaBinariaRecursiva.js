let busBinariaRec = (valor, array, inicio, final) => {
  const tInicio = Date.now() / 1000
  let res = {}
  if (inicio > final) res['encontrado'] = false
  let centro = Math.floor((inicio + final) / 2)
  if (array[centro].nombre === valor) {
    res['index'] = centro
    res['tiempo'] = Date.now() / 1000 - tInicio
    res['info'] = array[centro]
    res['encontrado'] = true
    return res
  } else {
    if (valor > array[centro].nombre) {
      inicio = centro + 1
      return busBinariaRec(valor, array, inicio, final)
    } else {
      final = centro - 1
      return busBinariaRec(valor, array, inicio, final)
    }
  }
}
export default busBinariaRec
