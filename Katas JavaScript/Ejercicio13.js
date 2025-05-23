/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función: */

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, nombre) {
  if (nameList.includes(nombre)) {
    return [true, nameList.indexOf(nombre)]
  }
  return [false, nombre + ' no está en esta lista']
}

console.log(nameFinder(names, 'Jessica'))
