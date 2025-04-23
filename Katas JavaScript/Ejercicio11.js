/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let sumaNumeros = 0
  let sumaLetras = 0
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      sumaNumeros += list[i]
    } else if (typeof list[i] === 'string') {
      sumaLetras += list[i].length
    }
  }
  console.log('La suma de numeros es: ' + sumaNumeros)
  console.log('La suma de letras es: ' + sumaLetras)
}

averageWord(mixedElements)
