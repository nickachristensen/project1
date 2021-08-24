// JS GOES HERE //

const button = document.getElementById('submitButton')
const list = document.getElementById('fetchedData')

const APIURL = "https://exercisedb.p.rapidapi.com/exercises"

// fetch(APIURL, {
//    "method": "GET",
//    "headers": {
//        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//        "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
//    }
// })
// .then(resp => resp.json())
// .then(arr => {
//     arr.forEach(obj => {
//         renderExercises(obj)
// });
// })

// user searches api for exercises
// only pull like matches



function renderExercises(obj) {
    const newExercise = document.createElement('li')
    newExercise.textContent = obj.name
    list.append(newExercise)

}
const searchForm = document.getElementById('search-form')
   
    searchForm.addEventListener('submit', event => {
        event.preventDefault()
        const submitValue = event.target.search.value
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
                if (submitValue !== obj.target.value) {
                    renderExercises(obj);
                }
                else {
                    alert('Please search again');
                }
                console.log(obj.length)
     })
    })
})
