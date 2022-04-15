import Note from "./models/note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('loadNotes', notes);
    };
    emitNotes();
  });
};
