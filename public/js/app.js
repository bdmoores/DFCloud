console.log('Client side javascript file is loaded.');



// fetch('/stats', {method:'GET'}).then((response) => {
//   response.json().then((data) => {
//       console.log(data)

//   })
// })

// fetch('/stats/wizard', {method:'GET'}).then((response) => {
//   response.json().then((data) => {
//     _class = data
//       console.log(data)
//   })
// })

const charForm =document.querySelector('form')
const classSelector = document.querySelector("#charClass")
const raceSelector = document.querySelector("#charRace")
const displayStats = document.querySelector("#stats")
const raceAttributes = [2, 2, 2, 2, 2, 2, 2]
const classAttributes = [2, -1, -1, -1, 2, 2, 4]



charForm.addEventListener('change',(e) => {
  e.preventDefault()
  const selectedClass = classSelector.value
  const selectedRace = raceSelector.value

  fetch('/stats/'+selectedClass, {method:'GET'}).then((response) => {
    response.json().then((data) => {
      _class = data
      classAttributes[0] = data.arcane
      classAttributes[1] = data.martial
      classAttributes[2] = data.deception
      classAttributes[3] = data.devotion
      classAttributes[4] = data.hand
      classAttributes[5] = data.gold
      classAttributes[6] = data.hp
      console.log(data)
      console.log(classAttributes)
    })
  })

  fetch('/stats/'+selectedRace, {method:'GET'}).then((response) => {
    response.json().then((data) => {
      raceAttributes[0] = data.arcane
      raceAttributes[1] = data.martial
      raceAttributes[2] = data.deception
      raceAttributes[3] = data.devotion
      raceAttributes[4] = data.hand
      raceAttributes[5] = data.gold
      raceAttributes[6] = data.hp
      console.log(data)
      console.log(raceAttributes)
    })
  })

})

charForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const totalAttributes=[] 
  for(i=0;i<7;i++){
    totalAttributes[i] = raceAttributes[i]+classAttributes[i]
  }
  console.log(totalAttributes)
  var x = displayStats.rows
  var y = x[0].cells
  console.log(classAttributes)
  for (i=0; i<y.length;i++){
    y[i].innerHTML=totalAttributes[i]
  }
})