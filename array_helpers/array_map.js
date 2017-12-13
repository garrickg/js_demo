let arr = ['Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries', 'Kiwis', 'Plums', 'Mangos', 'Watermelons']

// map creates new array with results of function on every element of array
var arr1 = []
for (var i = 0; i < arr.length; i++) {
  arr1.push(arr[i].toLowerCase())
}
console.log(arr1)

console.log(arr.map(function (fruit) {
  return fruit.toLowerCase()
}))
