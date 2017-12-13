// i still in scope outside {}
for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log(i)

// i not in scope outside {}
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i)

// var can be reassigned
// var name = 'Garrick'
// console.log(name)
// name = 'Gunn'
// console.log(name)
// name = false
// console.log(name)

// const is not immuatble
// const name = 'Garrick'
// console.log(name)
// name = 'Gunn'
// console.log(name)

// const arr = ['Garrick']
// console.log(arr)
// arr.push('Gunn') // Works for objects too
// console.log(arr)
