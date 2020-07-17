const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    console.log(chalk.red.bgYellow('All Notes'));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));

}

const saveNotes = notes => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json" , dataJson);
};

const loadNotes = () => {
    try{
    const data = fs.readFileSync("notes.json");
    const dataJson = data.toString();
    return JSON.parse(dataJson);
    }catch(e){
        return [];
    }
}

const addNote = (title , body) => {
    const notes = loadNotes();
    const dupNotes = notes.find(note => note.title === title);
    if(!dupNotes){
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    }else{
        console.log(chalk.red.inverse("Note Title Duplicated!"));
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const clearNotes = notes.filter(note => note.title !== title);
  
    if (notes.length > clearNotes.length) {
      saveNotes(clearNotes);
      console.log(chalk.green.inverse("Note removed!"));
    } else {
      console.log(chalk.red.inverse("Note doesn't exist"));
    }
  };
  
  const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
  
    if (note) {
      console.log(chalk.blue.inverse(note.title));
      console.log(note.body);
    } else {
      console.log(chalk.red.inverse("Note doesn't exist!"));
    }
  };
  
  module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote
  };

