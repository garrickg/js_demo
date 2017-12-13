// destructuring of arrays into individuals variable during assignment
let list = ['Apples', 'Oranges', 'Bananas']

var first = list[0]
var second = list[1]
var third = list[2]
console.log(first, second, third)

let [first1, second1, third1] = list
console.log(first1, second1, third1)
