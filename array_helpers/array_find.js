let arr = ['Apples', 'Oranges', 'Bananas', 'Pears', 'Strawberries', 'Kiwis', 'Plums', 'Mangos', 'Watermelons']

// find returns first element in array that passes test
for (var i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0).toLowerCase() === 'p') {
    console.log(arr[i])
    break
  }
}

// can also use findIndex
console.log(arr.find(function (fruit) {
  return fruit.charAt(0).toLowerCase() === 'p'
}))
