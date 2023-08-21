//////9.
// const fs = require('fs')

// // Overwrite
// // fs.writeFileSync('notes.txt', 'Nodejs created !!!')

//-----Chalenge
// //Append
// fs.appendFileSync('nodes.txt', '\nAppend !!!')


////10.
// const add = require('./utils.js')
// const sum  = add(4,-2)

// console.log(sum)
//-----Chalenge
// Define and use a funtion in new file
// const getNote = require('./note.js')

// const msg = getNote()
// console.log(msg)


////15. Input
// const chalk = require('chalk');
// const yargs  = require('yargs')
// const getNote = require('./note.js')

// const command  = process.argv[2]

// if (command =='add'){
//     console.log('Add note')
// }else if(command =='remove'){
//     console.log('Remove note')
// }
// console.log(process.argv)

// node note.js  add --title="Hello"


////16. Arg parsing - 19.
// const chalk = require('chalk');
// const yargs  = require('yargs')
// const notes = require('./utils.js')

// //Customize version
// yargs.version('1.1.0')
// // Cresate add command
// yargs.command({
//     command:'add',
//     describe: 'Add a new note',
//     builder:{
//         title:{
//             describe:'Note title',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'Note title',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler : function(argv){
//         // console.log('Title: ', argv.title)
//         // console.log('Body: ', argv.body)
//         notes.addNote(argv.title, argv.body)
//     }
// })
// // Cresate remove command
// yargs.command({
//     command:'remove',
//     describe: 'Remove a new note',
//     builder:{
//         title:{
//             describe:'Note title',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler : function(argv){
//     //     console.log('Remove a new note !!!')
//         notes.removeNote(argv.title)
//     }
// })
// yargs.parse()
// // console.log(process.argv)
// // console.log(yargs.argv)


// 22.ES6
const chalk = require('chalk');
const yargs  = require('yargs')
const notes = require('./utils.js')

//Customize version
yargs.version('1.1.0')
// Cresate add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        // console.log('Title: ', argv.title)
        // console.log('Body: ', argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
// Cresate remove command
yargs.command({
    command:'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
    //     console.log('Remove a new note !!!')
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe: 'List  note',
    handler (argv){
    //     console.log('Remove a new note !!!')
        notes.listNotes(argv.title)
    }
})
yargs.command({
    command:'read',
    describe: 'Read  note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
    //     console.log('Remove a new note !!!')
        notes.readNote(argv.title)
    }
})
yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)
