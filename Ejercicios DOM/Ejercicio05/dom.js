/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible. */

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const albumsList = document.createElement('ul')
let count = 1
for (const album of albums) {
  const li = document.createElement('li')
  li.textContent = album
  li.id = 'li' + count
  count++
  albumsList.appendChild(li)
}
albumsList.className = 'Lista'
document.body.appendChild(albumsList)

const h1 = document.createElement('h1')
h1.textContent = 'Lista de albumes'
document.body.prepend(h1)

const footer = document.createElement('footer')
const footerText = document.createElement('p')
footerText.innerHTML = '&copy; 2025 Juanma, aqui no hay derechos xD'
footer.appendChild(footerText)
document.body.appendChild(footer)
