////2.
// console.log('utils.js')

// const name='GiaLePhuong'
// const add = function (a,b) {
//     return a+b
// }
// module.exports = add
 

//--chalenge
// const getNote = function(){
//    return  'Your note... !!!'
// }
// module.exports = getNote


////11. ADD & Remove
// const validator = require('validator')
// console.log(validator.isEmail('phuonggiale13@gmail.com'))
// console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#content'))

// const chalk = require('chalk');

// console.log(chalk.blue.bgRed.bold('Hello') + chalk.underline(' Gia Le'));
// const str = chalk.green.inverse.bold('Success!')
// console.log(str)


// 19.
// const fs = require('fs')
// const chalk = require('chalk');

// const getNotes = function(){
//    return  'Your note... !!!'
// }
// const addNote = function(title, body){
//     const notes = loadNotes()  
//     const duplicateNotes  = notes.filter(function(notes){
//         return notes.title === title
//     })

//     if (duplicateNotes.length === 0 ){
//         notes.push({
//             title:title,
//             body: body
//         })
//         saveNote(notes)
//         console.log(chalk.green.inverse('New note added !!!'))
//     } else {
//         console.log(chalk.red.inverse('Note title taken !!!'))
//     }
    
// }
// const removeNote = function(title){
//     const notes = loadNotes()  
//     const notesToKeep  = notes.filter(function(notes){
//         return notes.title !== title
//     })
//     if (notes.length > notesToKeep.length ){
//         console.log(chalk.green.inverse('Note removed!'))
//     }else{
//         console.log(chalk.red.inverse('No note removed!'))
//     }
//     saveNote(notesToKeep)
// }

// const saveNote = function(notes){
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json',dataJSON )
// }
// const loadNotes = function(){
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch(e){
//         return []
//     }
    
// }

// module.exports = {
//     getNotes:getNotes,
//     addNote:addNote,
//     removeNote:removeNote
// }


// 22.
///debug
//node inspect note.js add --title='course' --body='a'
// chrome://inspect/#devices
const fs = require('fs')
const chalk = require('chalk');
const getNotes =() => {
   return  'Your note... !!!'
}
const addNote = (title, body) =>{
    const notes = loadNotes()  
    // const duplicateNotes  = notes.filter((notes) =>  notes.title === title)
    const findedNotes  = notes.find((note) =>  note.title === title)
    
    // debugger 
    
    // if (duplicateNotes.length === 0 ){
    if(!findedNotes){
        notes.push({
            title:title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.green.inverse('New note added !!!'))
    } else {
        console.log(chalk.red.inverse('Note title taken !!!'))
    }
    
}
const removeNote = (title) =>{
    const notes = loadNotes()  
  
    const notesToKeep  = notes.filter((notes) => notes.title !== title)
    if (notes.length > notesToKeep.length ){
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('No note removed!'))
    }
    saveNote(notesToKeep)
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON )
}
const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => {
        console.log(note.title)
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse('Note not found'))
    }

}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}

