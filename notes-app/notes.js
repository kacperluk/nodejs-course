const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Yor notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => title === note.title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(
            chalk.green.inverse('New note added!')
        )
    } else {
        console.log(
            chalk.red.inverse('Note title taken!')
        )
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => !(title === note.title))

    if (notes.length === updatedNotes.length)
        console.log(
            chalk.red.inverse('The Note doesnt exist')
        )
    else {
        saveNotes(updatedNotes)
        console.log(
            chalk.green.inverse('The Note ' + title + ' has been succesfully annihilated')
        )
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => console.log(chalk.green.inverse(note.title) + '\n' + note.body))
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => title === note.title)

    if (!noteToRead) {
        console.log(chalk.red.inverse('Note not found'))
    } else {
        console.log(chalk.inverse.bold(noteToRead.body))
    }
}

const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}