import Note from "./models/note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('server:loadNotes', notes);
    };
    emitNotes();
    socket.on('client:saveNotes', async(data) =>{
      const newNote =  new Note(data);
      const saveNote = await newNote.save();
      io.emit('server:newNote',saveNote)
    });
    socket.on('client:deleteNotes', async(id)=>{
      await Note.findByIdAndDelete(id);
      emitNotes();
    });
    socket.on('client:getNotebyId', async(id)=>{
      const note = await Note.findById(id);
      io.emit('server:selectNote', note);
    });
    socket.on('client:updateNote', async(updatedNote)=>{
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description
      });
      emitNotes();
    });
  });
};
