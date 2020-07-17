const yargs = require('yargs');
const notes = require('./notes');

//command add note
yargs.command({
     command:"add",
     describe: "Add a new note",
     builder: {
         title:{
             describe:"Note Title",
             demandOption:true,
             type:"string"
         },
         body:{
            describe:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv)  {
        notes.addNote(argv.title , argv.body);
        console.log(title , body);
    }
});

//command list all notes
yargs.command({
    command:"list",
    describe:"list all notes",
    handler:function() {
        notes.getNotes()
    }
});


//remove note
yargs.command({
    command:"remove",
    describe: "remove a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type: "string"
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
});

//read note
yargs.command({
    command:"read",
    describe: "read a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type: "string"
        }
    },
    handler:function(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();
