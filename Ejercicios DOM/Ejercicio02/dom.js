/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
const div = document.createElement('div')
document.body.appendChild(div)

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const divP = document.createElement('div')
const p = document.createElement('p')
divP.appendChild(p)
document.body.appendChild(divP)

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript. */
const div6 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  div6.appendChild(p)
}
document.body.appendChild(div6)

/* 2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'. */
const pDinamico = document.createElement('p')
const textoDinamico = 'Soy dinámico!'
pDinamico.textContent = `${textoDinamico}`
document.body.appendChild(pDinamico)

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const h2 = document.querySelector('.fn-insert-here')
const h2Text = 'Wubba Lubba dub dub'
h2.textContent = `${h2Text}`

/* 2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const removeMe = document.querySelectorAll('.fn-remove-me')
removeMe.forEach((element) => element.remove())

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const firstDiv = document.querySelector('div')
const pMedio = document.createElement('p')
const pMedioText = 'Voy en medio!'
pMedio.textContent = `${pMedioText}`
firstDiv.insertAdjacentElement('afterend', pMedio)

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */
const divPInside = document.querySelectorAll('div.fn-insert-here')
for (const div of divPInside) {
  const p = document.createElement('p')
  const text = 'Voy dentro!'
  p.textContent = `${text}`
  div.appendChild(p)
}
document.body.appendChild(divPInside)
