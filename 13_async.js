// async functions always return a promise
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2)
    }, 2000)
  })
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10)
  const b = await doubleAfter2Seconds(20)
  const c = await doubleAfter2Seconds(30)
  return x + a + b + c
}

// async function addAsync(x) {
//   const a = doubleAfter2Seconds(10)
//   const b = doubleAfter2Seconds(20)
//   const c = doubleAfter2Seconds(30)
//   return x + await a + await b + await c
// }

addAsync(10).then((sum) => {
  console.log(sum)
})
