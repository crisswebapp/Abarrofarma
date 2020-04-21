import data from '~/store/GenerarData'
import grafo from '~/store/SucursalGrafo'
import Resolver from '~/store/Grafo'
// eslint-disable-next-line no-unused-vars
let getSucursal = (tienda, producto, metodo) => {
  let soluciones = Resolver(grafo, tienda)
  let resInfo = {}
  for (let s in soluciones) {
    if (!soluciones[s]) continue
    let pdata = data.buscar(s)
    let productos = pdata.hijos.map(producto => {
      let newprod = {}
      newprod['nombre'] = producto.valor.nombre
      newprod['precio'] = producto.valor.precio
      newprod['cantidad'] = producto.valor.cantidad
      return newprod
    })
    productos = Ordenar(productos)
    let result = metodo(producto, productos, 0, productos.length - 1)
    if (result.encontrado) {
      if (result.info.cantidad > 0) {
        resInfo['producto'] = result.info
        resInfo['tienda'] = {
          sucursal: s,
          distancia: soluciones[s].distancia,
          enOtra: tienda !== s ? true : false
        }
        resInfo['rBusqueda'] = {
          encontrado: result.encontrado,
          tiempo: result.tiempo,
          index: result.index
        }
        console.log(resInfo)
        break
      }
    }
  }
  return resInfo
}

let Ordenar = array => {
  try {
    array.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return 1
      }
      if (a.nombre < b.nombre) {
        return -1
      }
      // a must be equal to b
      return 0
    })
    return array
  } catch (error) {
    console.log(error)
  }
}

let getData = (sucursal = 'Malacatan') => {
  let pdata = data.buscar(sucursal)
  let productos = pdata.hijos.map(producto => {
    let newprod = {}
    newprod['nombre'] = producto.valor.nombre
    newprod['precio'] = producto.valor.precio
    newprod['cantidad'] = producto.valor.cantidad
    return newprod
  })
  productos = Ordenar(productos)
  return productos
}

export { getSucursal, Ordenar, getData }
