const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1Ijoia2FjcGVybHVrIiwiYSI6ImNrMm1od2VqZjAzcHIzZG52dTUzYzN0Y2cifQ.SlyN-ZipEh7qF3ve9FXihQ&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the Geocoding Service')
        } else if (body.features.length === 0) {
            callback('Unable to find coordinates for specified location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode