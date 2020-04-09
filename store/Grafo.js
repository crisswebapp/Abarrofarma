let Resolver = (grafo, inicio) => {
  let soluciones = []
  soluciones[inicio] = []
  soluciones[inicio].distancia = 0
  let buscar = true
  while (buscar) {
    let nodo = null
    let vecinos = null
    let distancia = Infinity
    for (let n in soluciones) {
      if (!soluciones[n]) continue
      let ndist = soluciones[n].distancia
      let adj = grafo[n]
      for (let a in adj) {
        if (soluciones[a]) continue
        let d = adj[a] + ndist
        if (d < distancia) {
          nodo = soluciones[n]
          vecinos = a
          distancia = d
        }
      }
    }
    if (distancia === Infinity) {
      buscar = false
    }
    soluciones[vecinos] = nodo.concat(vecinos)
    soluciones[vecinos].distancia = distancia
  }
  return soluciones
}

export { Resolver }
