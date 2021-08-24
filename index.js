// JS GOES HERE //

const button = document.getElementById('submitButton')
const form = document.getElementById('routine')
const APIURL = "https://exercisedb.p.rapidapi.com/exercises"

fetch(APIURL, {
   "method": "GET",
   "headers": {
       "x-rapidapi-host": "exercisedb.p.rapidapi.com",
       "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
   }
})
.then(resp => resp.json())
.then(console.log)