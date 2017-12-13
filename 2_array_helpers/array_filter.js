let arr = ['Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries', 'Kiwis', 'Plums', 'Mangos', 'Watermelons']

// filter returns new array with all elements that pass test
var arr2 = []
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > 6) {
    arr2.push(arr[i])
  }
}
console.log(arr2)

console.log(arr.filter(function (fruit) {
  return fruit.length > 6
}))
