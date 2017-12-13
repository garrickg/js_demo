function msgAfterTimeout (msg, timeout, onDone) {
  setTimeout(function () {
    onDone(' Hello ' + msg + '!')
  }, timeout)
}

msgAfterTimeout('Foo Bar', 500, function (msg) {
  console.log('done after 500ms:' + msg)
})

// function msgAfterTimeout (msg, timeout) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Hello ${msg}!`), timeout)
//   })
// }

// msgAfterTimeout('Foo Bar', 500).then((msg) => {
//   console.log(`done after 500ms:${msg}`)
// })
