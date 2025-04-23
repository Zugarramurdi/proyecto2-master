/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

for (let i = placesToTravel.length - 1; i >= 0; i--) {
  // Recorremos el array al reves ya que vamos a eliminar objetos y los indices se modifican
  // Recorrerlo hacia adelnate en este ejercicio concreto habria servido, pero si el id 40 llega a estar justo despues del 11 no lo tendria en cuenta porque lo salta.
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
  }
}
console.log(placesToTravel)
