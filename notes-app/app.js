const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('123.2134534.5345.4345.234.235.65.234.253.6.578')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        actualNote: {
            describe: 'Its actual note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.actualNote)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove this fucking note',
    builder: {
        title: {
            desctibe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read note out loud',
    builder: {
        title: {
            describe: 'Read note with specified title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()