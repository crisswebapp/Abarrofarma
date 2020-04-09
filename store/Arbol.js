class Nodo {
  constructor(valor) {
    this.padre = null
    this.valor = valor
    this.hijos = []
  }
}
// eslint-disable-next-line no-unused-vars
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
      nodo.padre = padre.valor
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
}
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
  }
}
export { Arbol, Nodo, Producto }
