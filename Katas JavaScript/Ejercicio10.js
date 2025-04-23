/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let total = 0
  let avg = 0
  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i]
  }
  avg = (total / numberList.length).toFixed(2) // me estaba dando toc tanto decimal
  return parseFloat(avg) // quiero un float, no un String
}

console.log(average(numbers))
