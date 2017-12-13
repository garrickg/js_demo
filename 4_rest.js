// aggregation of remaining arguments

function addToShoppingList (args) {
  var items = Array.prototype.slice.call(arguments)
  console.log(items)
}
addToShoppingList('Carrots', 'Peas', 'Milk', 'Bread')

// function addToShoppingList2 (...items) {
//   console.log(items)
// }
// addToShoppingList2('Carrots', 'Peas', 'Milk', 'Bread')
