console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const searchElemet = document.querySelector('input')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElemet.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })
})