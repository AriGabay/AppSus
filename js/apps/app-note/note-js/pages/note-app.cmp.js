import { noteServices } from '../services/note.services.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteImgEdit from '../cmps/edit-cmp/note-img-edit.cmp.js';
import noteTodosEdit from '../cmps/edit-cmp/note-todos-edit.cmp.js';
import noteTxtEdit from '../cmps/edit-cmp/note-txt-edit.cmp.js';
import noteVideoEdit from '../cmps/edit-cmp/note-video-edit.cmp.js';
import navAdd from '../cmps/add-cmp/nav-add.cmp.js';
import noteTxtAdd from '../cmps/add-cmp/note-txt-add.cmp.js';
import noteVideoAdd from '../cmps/add-cmp/note-video-add.cmp.js';
import noteImgAdd from '../cmps/add-cmp/note-img-add.cmp.js';
import noteTodosAdd from '../cmps/add-cmp/note-todos-add.cmp.js';

export default {
  props: [],
  template: `
    <div class="notes-preview" v-if="notes" >
      <div class="nav-add">  
      <nav-add @addByType="addByType"></nav-add>
    </div>
    <div class="notes-container">
      <component v-if="!noteFromComp && !typeChoose" :class="{ pin: note.isPinned}" v-for="note in notes" :is="note.type" :note="note" @editNote="toEdit" @removeNote="removeNote" @togglePin="togglePin"></component>
    </div>
    <component v-if="noteFromComp && !typeChoose" :is="type" :note="noteFromComp" @noteFromCompToNull="resetNoteFromComp" @updateNote="updateNote" @submitBack="removeAdd"></component>    
    <component v-if="typeChoose" :is="typeChoose" @createNewNote="createNewNote" @submitBack="removeAdd"></component>
    <div class="btn-back"><button class="btn-back" @click="removeAdd">Back</button></div>
  </div>`,
  data() {
    return {
      notes: null,
      noteFromComp: null,
      type: null,
      typeChoose: null,
    };
  },
  methods: {
    toEdit(note) {
      this.noteFromComp = note;
      this.type = note.type + 'Edit';
    },
    resetNoteFromComp() {
      this.noteFromComp = null;
    },
    updateNote(newNote) {
      noteServices.updateNote(newNote);
    },
    addByType(typeFromUser) {
      this.typeChoose = typeFromUser + 'Add';
    },
    removeAdd() {
      this.typeChoose = null;
      this.noteFromComp = null;
    },
    createNewNote(newNote) {
      noteServices.saveNewNote(newNote).then((note) => {
        this.notes.push(note);
      });
    },
    reset() {
      (this.noteFromComp = null), (this.type = null);
      this.typeChoose = null;
      this.$forceUpdate();
    },
    removeNote(note) {
      console.log('note:', note);
      noteServices.removeNote(note.id).then((res) => {
        noteServices.query().then((notes) => (this.notes = notes));
      });
    },
    togglePin(note) {
      note.isPinned = !note.isPinned;
      noteServices.updateNote(note);
    },
  },
  components: {
    noteTxt,
    noteTodos,
    noteImg,
    noteVideo,
    noteImgEdit,
    noteTodosEdit,
    noteTxtEdit,
    noteVideoEdit,
    noteTxtAdd,
    noteVideoAdd,
    noteImgAdd,
    navAdd,
    noteTodosAdd,
  },
  computed: {},
  created() {
    noteServices.query().then((notes) => {
      this.notes = notes;
    });
  },
};
