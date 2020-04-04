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

function data() {
  let t = new Arbol()
  t.agregarNodo('abarrofarmacia')
  t.agregarNodo('san marcos', 'abarrofarmacia')
  t.agregarNodo('malacatan', 'san marcos')
  t.agregarNodo('abarrotes', 'malacatan')
  let leche = new Producto('leche', 15)
  let azucar = new Producto('azucar', 5)
  t.agregarNodo(leche, 'abarrotes')
  t.agregarNodo(azucar, 'abarrotes')
  t.agregarNodo(new Producto('Papel Higienico', '12'), 'abarrotes')
  let result = t.buscarBFS('malacatan')
  return result
}
export { data }
