const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(chalk.green(msg))
console.log(chalk.green.inverse('failed succes'))