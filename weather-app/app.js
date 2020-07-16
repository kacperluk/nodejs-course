const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!process.argv[2])
    return console.log('please provede location')
const address = process.argv[2]
geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log('Error', error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        console.log(location, forecastData)
    })
})
