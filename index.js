const APIURL = "https://exercisedb.p.rapidapi.com/exercises"
const button = document.getElementById('submitButton')
const fetchedExerciseList = document.getElementById('fetchedData')
const routine = document.getElementById('routine')
const searchForm = document.getElementById('search-form')

fetch(APIURL, {
   "method": "GET",
   "headers": {
       "x-rapidapi-host": "exercisedb.p.rapidapi.com",
       "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
   }
})
.then(resp => resp.json())
.then(arr => {
    console.log(arr)
    let uniqueTargets = [...new Set(arr.map(exercise => exercise.target))]
    uniqueTargets.forEach(targetString => {
        const exerciseSearches = document.createElement('option')
        exerciseSearches.textContent = targetString
        const searchList = document.querySelector("#exercises")
        searchList.append(exerciseSearches)       
    })
})

function renderExercises(obj) {
    const newExercise = document.createElement('li')
    newExercise.textContent = obj.name
    fetchedExerciseList.append(newExercise)

}

searchForm.addEventListener('submit', event => {
    event.preventDefault()
    while (fetchedExerciseList.firstChild) {
        fetchedExerciseList.removeChild(fetchedExerciseList.firstChild);
    }

const submitValue = event.target[0].value
console.log(submitValue)

fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${submitValue}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
         "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })   
    .then(resp => resp.json())
    .then(arr => {
        arr.forEach(obj => {
            renderExercises(obj);
            console.log(obj.length)
                 
        })     
        searchForm.reset()             
     })
})


const li = document.querySelector('ul#fetchedData')
li.addEventListener('click', e => {
    const featureExercise = e.target.textContent
    renderFeaturedExercise()
    console.log(featureExercise)

function renderFeaturedExercise() {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${featureExercise}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(response => response.json())
    .then(arr => {
        arr.forEach(obj => {
            const featureBox = document.getElementById('feature')
            featureBox.innerHTML = ""
            const featureImg = document.createElement('img')
            featureImg.src = obj.gifUrl
            featureBox.append(featureImg)

            const featureTarget = document.createElement('h3')
            featureTarget.textContent = "Target muscle group: " + obj.target
            featureBox.append(featureTarget)

            const featureName = document.createElement('h3')
            featureName.textContent = "Exercise: " + obj.name
            featureBox.append(featureName)

            const featureEquip = document.createElement('h3')
            featureEquip.textContent = "Equipment: " + obj.equipment
            featureBox.append(featureEquip)

            let btn = document.createElement('button')
            btn.innerHTML = "Add to Routine"
            featureBox.appendChild(btn)

            btn.addEventListener('click', event => {
                
                while (featureBox.firstChild) {
                    featureBox.removeChild(featureBox.firstChild);
                }

                const routine = document.getElementById('myRoutine')
                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routine.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.innerHTML = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
    })
})
}
})

const routineUl = document.getElementById('myRoutine')
routineUl.addEventListener('click', e => {
    const featureExercise = e.target.childNodes[0].textContent
    renderFeaturedExercise()
    console.log(featureExercise)

function renderFeaturedExercise() {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${featureExercise}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(response => response.json())
    .then(arr => {
        arr.forEach(obj => {
            const featureBox = document.getElementById('feature')
            featureBox.innerHTML = ""
            const featureImg = document.createElement('img')
            featureImg.src = obj.gifUrl
            featureBox.append(featureImg)

            const featureTarget = document.createElement('h3')
            featureTarget.textContent = "Target muscle group: " + obj.target
            featureBox.append(featureTarget)

            const featureName = document.createElement('h3')
            featureName.textContent = "Exercise: " + obj.name
            featureBox.append(featureName)

            const featureEquip = document.createElement('h3')
            featureEquip.textContent = "Equipment: " + obj.equipment
            featureBox.append(featureEquip)

            let btn = document.createElement('button')
            btn.textContent = "Add to Routine"
            featureBox.appendChild(btn)

            btn.addEventListener('click', event => {
                
                while (featureBox.firstChild) {
                    featureBox.removeChild(featureBox.firstChild);
                }

                const routine = document.getElementById('myRoutine')
                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routine.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.textContent = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
    })
})
}
})




// const routineBox = document.getElementById('myRoutine')

// const favourite = document.createElement('button')
// favourite.id = "favouriteBtn"
// favourite.innerHTML = "SAVE"
// routineBox.append(favourite)

// favourite.addEventListener('click', e=> {
//     const favouriteBox = document.querySelector('div.favourites')
//     const favourited = document.createElement('li')
//     favouriteBox.append(favourited)
//     favourited.textContent = document.getElementsByName('myRoutine')
//     console.log(favouriteBox)
// })
 
const routineBox = document.getElementById('myRoutine')
const favourite = document.createElement('button')
favourite.id = "favouriteBtn"
favourite.innerHTML = "SAVE"
routineBox.append(favourite)
favourite.addEventListener('click', e=> {
    const favouriteBox = document.querySelector('div.favourites')
    const favourited = document.createElement('li')
    const listedItems = document.querySelectorAll('#myRoutine li')
    // let listArray = []
    for (let i=0; i<listedItems.length; i++){
        favouriteBox.appendChild(listedItems[i])
    }
})

const favouriteBox = document.querySelector('div.favourites')
favouriteBox.addEventListener('click', e => {
    const featureExercise = e.target.childNodes[0].textContent
    renderFeaturedExercise()
    console.log(featureExercise)

function renderFeaturedExercise() {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${featureExercise}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(response => response.json())
    .then(arr => {
        arr.forEach(obj => {
            const featureBox = document.getElementById('feature')
            featureBox.innerHTML = ""
            const featureImg = document.createElement('img')
            featureImg.src = obj.gifUrl
            featureBox.append(featureImg)

            const featureTarget = document.createElement('h3')
            featureTarget.textContent = "Target muscle group: " + obj.target
            featureBox.append(featureTarget)

            const featureName = document.createElement('h3')
            featureName.textContent = "Exercise: " + obj.name
            featureBox.append(featureName)

            const featureEquip = document.createElement('h3')
            featureEquip.textContent = "Equipment: " + obj.equipment
            featureBox.append(featureEquip)

            let btn = document.createElement('button')
            btn.textContent = "Add to Routine"
            featureBox.appendChild(btn)

            btn.addEventListener('click', event => {
                
                while (featureBox.firstChild) {
                    featureBox.removeChild(featureBox.firstChild);
                }

                const routine = document.getElementById('myRoutine')
                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routine.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.textContent = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
    })
})
}
})

// const routineBox = document.getElementById('myRoutine')
// const favourite = document.createElement('button')
// favourite.id = "favouriteBtn"
// favourite.innerHTML = "SAVE"
// routineBox.append(favourite)
// favourite.addEventListener('click', e=> {
//     const favouriteBox = document.querySelector('div.favourites')
//     const favourited = document.createElement('li')
//     const listedItems = document.querySelectorAll('#myRoutine li')
//     for (let i=0; i<listedItems.length; i++){
//         let listArray = []
//         listArray.push(listedItems[i])
//         listArray.id = [i]
//         for(obj of listArray){
//             console.log(obj.textContent)
//         }
//         favouriteBox.append()
//     }
// })