let arr = ['Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries', 'Kiwis', 'Plums', 'Mangos', 'Watermelons']

console.log(arr.filter(function (fruit) {
  return fruit.length > 6
}))

// console.log(arr.filter(fruit => {
//   return fruit.length > 6
// }))
