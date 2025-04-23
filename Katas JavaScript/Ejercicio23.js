/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]
const smallMovies = []
const mediumMovies = []
const largeMovies = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    largeMovies.push(movie)
  }
}

console.table(smallMovies)
console.table(mediumMovies)
console.table(largeMovies)
// me parecia una presentacion bonita en tabla
// con console.log() quedaba un poco raro y hacer movieArray.map(movie => movie.name).join(', ') me parecia largo y solo coge nombre
