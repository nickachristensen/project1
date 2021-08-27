const APIURL = "https://exercisedb.p.rapidapi.com/exercises"
const fetchedExerciseList = document.getElementById('fetchedData')
const searchForm = document.getElementById('search-form')
const routineUl = document.getElementById('myRoutine')

fetch(APIURL, {
   "method": "GET",
   "headers": {
       "x-rapidapi-host": "exercisedb.p.rapidapi.com",
       "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
   }
})
.then(resp => resp.json())
.then(arr => {
    let uniqueTargets = [...new Set(arr.map(exercise => exercise.target))]
    uniqueTargets.forEach(targetString => {
        const exerciseSearches = document.createElement('option')
        exerciseSearches.textContent = targetString
        const searchList = document.querySelector("#exercises")
        searchList.append(exerciseSearches)       
    })
})

const renderExercises = obj => {
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
        })     
        searchForm.reset()             
    })
})


const li = document.querySelector('ul#fetchedData')
li.addEventListener('click', e => {
const featureExercise = e.target.textContent
    renderFeaturedExercise()

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
                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routineUl.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.innerHTML = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
        })
    })
}})


routineUl.addEventListener('click', e => {
const featureExercise = e.target.childNodes[0].textContent
    renderFeaturedExercise()

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

                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routineUl.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.textContent = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
        })
    })
}})

const favourite = document.createElement('button')
favourite.id = "favouriteBtn"
favourite.innerHTML = "SAVE"
routineUl.append(favourite)
favourite.addEventListener('click', e=> {
    const favouriteBox = document.querySelector('div.favourites')
    const listedItems = document.querySelectorAll('#myRoutine li')
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

                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = obj.id
                routineUl.append(newEx)

                const xBtn = document.createElement('button')
                xBtn.textContent = "Remove"
                newEx.append(xBtn)

                xBtn.addEventListener('click', e => {
                    newEx.remove(e.target.parentElement)
                })
            })
        })
    })
}})
