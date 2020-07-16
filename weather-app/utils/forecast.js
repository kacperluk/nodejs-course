const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=577612cca5c92f90544f3602a5e1aecf&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connnet to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const temperature = body.current.temperature
            const humidity = body.current.humidity
            const description = body.current.weather_descriptions[0]
            const data = 'It is currently ' + temperature + ' deegres ' + description + '. There is ' + humidity + '% of humidity'
            callback(undefined, data)
        }
    })
}

module.exports = forecast