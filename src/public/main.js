import {loadNotes,newNote,onSelected} from './socket.js';
import { onHandleSubmit,renderNotes,appendNote,fillForm} from "./ui.js";

newNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm);

const noteform = document.querySelector('#noteform');
noteform.addEventListener('submit', onHandleSubmit);