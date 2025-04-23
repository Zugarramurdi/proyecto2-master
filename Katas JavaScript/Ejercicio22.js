/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const usedFruits = []
for (const food of foodSchedule) {
  if (!food.isVegan) {
    let randomFruit = null
    while (!randomFruit || usedFruits.includes(randomFruit)) {
      const randomIndex = Math.floor(Math.random() * fruits.length)
      randomFruit = fruits[randomIndex]
    }
    food.name = randomFruit
    food.isVegan = true
    usedFruits.push(randomFruit)
  }
}

console.log(foodSchedule)
