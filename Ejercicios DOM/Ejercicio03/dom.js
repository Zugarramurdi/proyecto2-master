/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const countriesList = document.createElement('ul')
for (const countrie of countries) {
  const li = document.createElement('li')
  li.textContent = countrie
  countriesList.appendChild(li)
}
document.body.appendChild(countriesList)

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removeMe = document.querySelectorAll('.fn-remove-me')
removeMe.forEach((element) => element.remove())

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const dataDiv = document.querySelector('[data-function="printHere"]')
const listCars = document.createElement('ul')
for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  listCars.appendChild(li)
}
dataDiv.appendChild(listCars)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
  { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=1>' },
  { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=2>' },
  { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=3>' },
  { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=4>' },
  { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=5>' }
]
for (const country of countries2) {
  const div = document.createElement('div')
  div.className = 'LoopDivs'
  const h4 = document.createElement('h4')
  const img = document.createElement('img')

  h4.textContent = country.title
  img.src = country.imgUrl.replace(/[<>]/g, '')
  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs. */
const deleteButton = document.createElement('button')
deleteButton.textContent = 'Borrar Ultimo Div'
deleteButton.addEventListener('click', () => {
  const divs = document.querySelectorAll('.LoopDivs')
  divs[divs.length - 1].remove()
})
document.body.appendChild(deleteButton)

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */
const loopDivs = document.querySelectorAll('.LoopDivs')
loopDivs.forEach((div) => {
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Elimina ESTE elemento'
  deleteButton.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(deleteButton)
})
