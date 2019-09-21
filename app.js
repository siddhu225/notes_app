const notes = require('./notes.js')
const yargs=require('yargs')

//customize your yargs command

yargs.version('1.1.0');

//create add command

yargs.command({
  command:'add',
  describe:'adding a new note',
  builder:{
    title:{
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body:{
      describe:'Note Body',
      demandOption:true,
      type:'string'
    }

  },
  handler(argv){
    notes.addNote(argv.title,argv.body)
  }
})

//create remove command

yargs.command({
  command:'remove',
  describe:'removing a note',
  builder:{
    title:{
      describe:'removing a note',
      demandOption:true,
      type:'string'
    }

  },
  handler(argv){
    notes.removeNote(argv.title)
  }
})

//create list command

yargs.command({
  command:'list',
  describe:'listing a note',
  handler(){
    notes.listNote()
  }
})

//create read command

yargs.command({
  command:'read',
  describe:'reading a note',
  builder:{
    title:{
      describe:'showing a note',
      demandOption:true,
      type:'string'
    }
  },
  handler(args){
    notes.readNote(args.title)
  }
})

yargs.parse()
