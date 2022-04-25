import { saveNotes, deleteNotes, getNotebyId, updateNote } from "./socket.js";

const noteList = document.querySelector("#notes");
const title = document.querySelector("#title");
const description = document.querySelector("#description");

let saveId = "";

const noteUI = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="">
        <div class="">
            <h1 class="card-title h3">${note.title}</h1>
            <div>
                <button class="delete" data-id="${note._id}">delete</button>
                <button class="update" data-id="${note._id}">update</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>
  `;
    const btnDelete = div.querySelector(".delete");
    const btnUpdate = div.querySelector(".update");

    btnDelete.addEventListener("click", () => deleteNotes(btnDelete.dataset.id));
    btnUpdate.addEventListener("click", () => getNotebyId(btnDelete.dataset.id));

    return div;
};

export const renderNotes = notes => {
    noteList.innerHTML = "";
    notes.forEach(note => noteList.append(noteUI(note)));
}

export const fillForm = note => {
    title.value = note.title;
    description.value = note.description;
    saveId = note._id;
}

export const onHandleSubmit = (event) => {
    event.preventDefault();
    if (saveId) {
        updateNote(saveId, title.value, description.value);
    } else {
        saveNotes(title.value, description.value);
    }
    saveId = "";
    title.value = "";
    description.value = "";
}

export const appendNote = note => {
    noteList.append(noteUI(note));
}