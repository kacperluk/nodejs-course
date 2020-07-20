const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kacper'
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Kacper'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather App',
        message: 'some message',
        name: 'Kacper'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        temperature: 31,
        location: 'Wroclaw'
    })
})

app.get('help/*', (req, res) => {
    res.send('Article not found')
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})