/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

// PRUEBA 2
/* const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telekinesis' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
] */

function findMutantByPower(mutants, power) {
  const mutantFound = []
  for (const mutant of mutants) {
    if (power === mutant.power) {
      mutantFound.push(mutant)
    }
  }
  if (mutantFound.length === 0) {
    return `no se encontraron mutantes con el poder ${power}`
  }
  return (
    `Se han encontrado ${mutantFound.length} mutantes con el poder ${power}: ` +
    mutantFound.map((mutant) => mutant.name).join(', ')
  )
}
console.log('\n' + findMutantByPower(mutants, 'teleportation'))
console.log('\n' + findMutantByPower(mutants, 'telekinesis'))
console.log('\n' + findMutantByPower(mutants, 'transformation') + '\n')
