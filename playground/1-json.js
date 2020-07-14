const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.planet = 'Mars'

const bookJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', bookJSON)