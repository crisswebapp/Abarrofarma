class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }
}

class Nodo {
  constructor(valor) {
    this.valor = valor
    this.hijos = []
  }
}

class Arbol {
  constructor() {
    this.raiz = null
  }

  buscarBFS(valor) {
    let lista = [this.raiz]
    while (lista.length) {
      const nodo = lista.shift()
      if (nodo.valor === valor) {
        return nodo
      }
      for (let i = 0; i < nodo.hijos.length; i++) {
        lista.push(nodo.hijos[i])
      }
    }
    return null
  }
  agregarNodo(valor, nodoDestino) {
    const nodo = new Nodo(valor)
    const padre = nodoDestino ? this.buscarBFS(nodoDestino) : null

    if (padre) {
      padre.hijos.push(nodo)
    } else if (!this.raiz) {
      this.raiz = nodo
    } else {
      throw new Error(
        'El nodo raiz ya existe, indeque a que nodo se agregara el valor'
      )
    }
  }
  borrarNodo(valor) {
    if (this.raiz.valor === valor) {
      this.raiz = null
    }

    let lista = [this.raiz]

    while (lista.length) {
      const nodo = lista.shift()
      for (let i = 0; i < nodo.hijos.length; i++) {
        if (nodo.hijos[i].valor === valor) {
          nodo.hijos.splice(i, 1)
        } else {
          lista.push(nodo.hijos[i])
        }
      }
    }
  }
  recorrerAncho(fn) {
    let lista = [this.raiz]
    while (lista.length) {
      let nodo = lista.shift()
      fn && fn(nodo)
      for (let i = 0; i < nodo.hijos.length; i++) {
        lista.push(nodo.hijos[i])
      }
    }
  }
  recorrerProfundida(fn, method) {
    let actual = this.raiz
    if (method) {
      this['_' + method](actual, fn)
    } else {
      this._preOrden(actual, fn)
    }
  }
  _preOrden(nodo, fn) {
    if (!nodo) {
      return
    }
    fn && fn(nodo)
    for (let i = 0; i < nodo.hijos.length; i++) {
      this._preOrden(nodo.hijos[i], fn)
    }
  }
  _postOrden(nodo, fn) {
    if (!nodo) {
      return
    }
    for (let i = 0; i < nodo.hijos.length; i++) {
      this._postOrden(nodo.hijos[i], fn)
    }
    fn && fn(nodo)
  }
}

let busLineal = (valor, array) => {
  let timeNow = Date.now()
  let n = array.length
  let res = {}
  for (let i = 0; i < n; i++) {
    if (array[i].nombre === valor) {
      res['index'] = i
    }
  }
  if (res.index === undefined) {
    throw 'El dato no esta el la lista'
  }
  res['tiempo'] = (Date.now() - timeNow) / 1000
  return res
}

function data() {
  //se crea el arbol
  let t = new Arbol()
  //se agrega el nodo principal
  t.agregarNodo('abarrofarmacia')
  //se agrega el nodo de san marcos
  t.agregarNodo('san marcos', 'abarrofarmacia')
  //se agrega el nodo se malacatan
  t.agregarNodo('malacatan', 'san marcos')
  //se agrega el nodo de departamento de abarrotes
  t.agregarNodo('abarrotes', 'malacatan')
  //se agregan productos al nodo de abarrotes
  t.agregarNodo(new Producto('azucar', '5'), 'abarrotes')
  t.agregarNodo(new Producto('leche', '12'), 'abarrotes')
  t.agregarNodo(new Producto('papel', '12'), 'abarrotes')
  t.agregarNodo(new Producto('aceite', '10'), 'abarrotes')
  t.agregarNodo(new Producto('aderezos', '12'), 'abarrotes')
  t.agregarNodo(new Producto('cafe', '5'), 'abarrotes')
  t.agregarNodo(new Producto('avena', '7'), 'abarrotes')
  t.agregarNodo(new Producto('cereales', '25'), 'abarrotes')
  t.agregarNodo(new Producto('sal', '3'), 'abarrotes')
  t.agregarNodo(new Producto('miel', '20'), 'abarrotes')
  t.agregarNodo(new Producto('mayonesa', '15'), 'abarrotes')
  t.agregarNodo(new Producto('mermelada', '12'), 'abarrotes')
  t.agregarNodo(new Producto('te', '6'), 'abarrotes')
  t.agregarNodo(new Producto('vinagre', '10'), 'abarrotes')
  t.agregarNodo(new Producto('huevos', '25'), 'abarrotes')
  t.agregarNodo(new Producto('pastas', '3'), 'abarrotes')
  t.agregarNodo(new Producto('aceitunas', '8'), 'abarrotes')
  t.agregarNodo(new Producto('champinones', '10'), 'abarrotes')
  t.agregarNodo(new Producto('Frijoles', '9'), 'abarrotes')
  t.agregarNodo(new Producto('sardina', '7'), 'abarrotes')
  t.agregarNodo(new Producto('atun', '15'), 'abarrotes')
  t.agregarNodo(new Producto('chile enlatado', '5'), 'abarrotes')
  t.agregarNodo(new Producto('ensalda enlatada', '20'), 'abarrotes')
  t.agregarNodo(new Producto('elote enlatado', '12'), 'abarrotes')
  t.agregarNodo(new Producto('sopa enlatada', '5'), 'abarrotes')
  t.agregarNodo(new Producto('fruta enlatada', '25'), 'abarrotes')
  t.agregarNodo(new Producto('crema', '10'), 'abarrotes')
  t.agregarNodo(new Producto('margarina', '7'), 'abarrotes')
  t.agregarNodo(new Producto('queso', '20'), 'abarrotes')
  t.agregarNodo(new Producto('papa', '5'), 'abarrotes')
  t.agregarNodo(new Producto('Cacahuates', '10'), 'abarrotes')
  t.agregarNodo(new Producto('nueces', '15'), 'abarrotes')
  t.agregarNodo(new Producto('tortilla de harina', '20'), 'abarrotes')
  t.agregarNodo(new Producto('pan dulce', '2'), 'abarrotes')
  t.agregarNodo(new Producto('aguacate', '3'), 'abarrotes')
  t.agregarNodo(new Producto('ajo', '4'), 'abarrotes')
  t.agregarNodo(new Producto('cebolla', '6'), 'abarrotes')
  t.agregarNodo(new Producto('cilantro', '2'), 'abarrotes')
  t.agregarNodo(new Producto('tomate', '4'), 'abarrotes')
  t.agregarNodo(new Producto('limon', '8'), 'abarrotes')
  t.agregarNodo(new Producto('manzana', '10'), 'abarrotes')
  t.agregarNodo(new Producto('naranja', '12'), 'abarrotes')
  t.agregarNodo(new Producto('salchica', '10'), 'abarrotes')
  t.agregarNodo(new Producto('tocino', '20'), 'abarrotes')
  t.agregarNodo(new Producto('jamon ', '5'), 'abarrotes')
  t.agregarNodo(new Producto('chorizo', '10'), 'abarrotes')
  t.agregarNodo(new Producto('suero', '10'), 'abarrotes')
  t.agregarNodo(new Producto('pasta dental', '10'), 'abarrotes')
  t.agregarNodo(new Producto('shampoo', '40'), 'abarrotes')
  t.agregarNodo(new Producto('servilletas', '5'), 'abarrotes')
  t.agregarNodo(new Producto('cloro', '20'), 'abarrotes')
  t.agregarNodo(new Producto('desinfectante', '15'), 'abarrotes')

  let result = t.buscarBFS('malacatan')
  return result
}
export { data, busLineal }
