function addNumbers (x, y, z) {
  if (y === undefined) {
    y = 7
  }
  if (z === undefined) {
    z = 10
  }
  return x + y + z
}
console.log(addNumbers(1))

function addNumbers2 (x, y = 7, z = 10) {
  return x + y + z
}
console.log(addNumbers2(1))
