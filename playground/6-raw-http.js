const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=577612cca5c92f90544f3602a5e1aecf&query=Warsaw',

const request = http.request(url, (res) => {
    let data = ''
    res.on('data', (chunk) => {
        console.log(chunk)
    })

    res.on('end', () => {

    })
})

request.end()