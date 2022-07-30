// Mutable

type ThreeDCoordinate = [x: number, y: number, z: number]

function make3DCoordinate(x: number, y: number, z: number): ThreeDCoordinate {
  return [x, y, z]
}

function add3DCoordinates(...coordinates: ThreeDCoordinate[]) {
  const result = Array.from({ length: 3 })
  return result.map((_, index) =>
    coordinates.map(coord => coord[index] || 0).reduce((sum, x) => sum + x, 0),
  )
}

console.log(add3DCoordinates([1, 2, 3], [4, 5, 6], [7, 8, 9]))

// Immutable (really const)

const fixed = [10, 20, 30] as const
