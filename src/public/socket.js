const socket = io();

export const loadNotes = (callback) => {
    socket.on('server:loadNotes', callback);
}

export const newNote = (callback) => {
    socket.on('server:newNote', callback);
}

export const saveNotes = (title, description) => {
    socket.emit('client:saveNotes', {
        title,
        description
    });
};

export const deleteNotes = id => {
    socket.emit('client:deleteNotes', id);
}

export const getNotebyId = (id) => {
    socket.emit('client:getNotebyId', id);
}

export const onSelected = (callback) => {
    socket.on('server:selectNote', callback);
}

export const updateNote = (id,title,description) =>{
    socket.emit("client:updateNote",{
        _id: id,
        title,
        description
    });
}