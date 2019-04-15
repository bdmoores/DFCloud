console.log('Client side javascript file is loaded.');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)

    })
})

// fetch('/stats', {method:'GET'}).then((response) => {
//   response.json().then((data) => {
//       console.log(data)

//   })
// })

// fetch('/stats/wizard', {method:'GET'}).then((response) => {
//   response.json().then((data) => {
//     _class = data
//       console.log(data)
//       console.log('arcane:'+data.arcane)
//   })
// })

