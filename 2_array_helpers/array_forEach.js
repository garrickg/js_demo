let arr = ['Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries', 'Kiwis', 'Plums', 'Mangos', 'Watermelons']

// forEach executes function once for each array element
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

arr.forEach(function (fruit) {
  console.log(fruit)
})
