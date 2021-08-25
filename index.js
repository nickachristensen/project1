// JS GOES HERE //

const button = document.getElementById('submitButton')
const list = document.getElementById('fetchedData')
const APIURL = "https://exercisedb.p.rapidapi.com/exercises"

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
    list.append(newExercise)

}
const searchForm = document.getElementById('search-form')

    searchForm.addEventListener('submit', event => {
        event.preventDefault()
        
        while (list.firstChild) {
            list.removeChild(list.firstChild);
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



 
        

//  const promise1 = fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${submitValue}`, {
// 	    "method": "GET",
// 	     "headers": {
// 		    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
// 		    "x-rapidapi-key": "9f7133ba3dmsh3c132d75638fd83p14a77bjsna10aef0a38ad"
// 	}
// })

//     const promise2 = fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${submitValue}`, {
// 	    "method": "GET",
// 	     "headers": {
// 		    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
// 		    "x-rapidapi-key": "9f7133ba3dmsh3c132d75638fd83p14a77bjsna10aef0a38ad"
// 	}
// })
    
//     const promise3 = fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${submitValue}`, {
// 	    "method": "GET",
// 	     "headers": {
// 		    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
// 		    "x-rapidapi-key": "9f7133ba3dmsh3c132d75638fd83p14a77bjsna10aef0a38ad"
// 	}
// })

//     const promises = [promise1, promise2, promise3];
   
//    Promise.race(promises)