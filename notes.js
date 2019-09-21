const fs=require("fs")
const chalk = require("chalk")

const getNotes =function(a){
  return a
}

const addNote = (title,body)=>{

  const notes =loadNote()

  const duplicateNote = notes.filter((note)=>note.title==title)


  if(duplicateNote.length === 0){
    notes.push({
      title:title,
      body:body
    })
  
    saveNotes(notes)
    console.log("new notes added successfully")
  }else{
    console.log("Notes with this title already exists")
  }
}

const saveNotes=(notes)=>{

  const dataJson=JSON.stringify(notes)

  fs.writeFileSync('notes.json',dataJson)
}

const loadNote=()=>{

  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJson=dataBuffer.toString()
    return JSON.parse(dataJson) 
  }catch(e){
    return []
  }
  
}

const removeNote = (title)=>{
  const notes = loadNote()
  const available = notes.filter((note)=>note.title !== title)
  if(notes.length > available.length){
    console.log(chalk.green.inverse("success"))
    saveNotes(available)

  }else{
    console.log(chalk.red.inverse("failure"))
  }
  
}

const listNote=()=>{

  const notes=loadNote()

  console.log(chalk.green.inverse("listing all notes...notes."))

  notes.forEach(element => {
    console.log(element.title)
    
  });
}

const readNote=(title)=>{

  const notes=loadNote()

  const note=notes.find((note)=>note.title === title)

  if(note){
    console.log(chalk.green.inverse(note.title))
    console.log((note.body))
  }else{
    console.log(chalk.green.inverse("failure"))
  }
  
}


module.exports = {
  addNote: addNote,
  removeNote:removeNote,
  listNote:listNote,
  readNote:readNote
   
}