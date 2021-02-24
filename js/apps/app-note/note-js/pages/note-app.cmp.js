import { noteServices } from '../services/note.services.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteImgEdit from '../cmps/edit-cmp/note-img-edit.cmp.js';
import noteTodosEdit from '../cmps/edit-cmp/note-todos-edit.cmp.js';
import noteTxtEdit from '../cmps/edit-cmp/note-txt-edit.cmp.js';
import noteVideoEdit from '../cmps/edit-cmp/note-video-edit.cmp.js';
export default {
  props: [],
  template: `
    <div class="notes-preview" v-if="notes" >
            <component v-if="!noteFromComp" v-for="note in notes" :is="note.type" :note="note" @editNote="toEdit"></component>
            <component v-if="noteFromComp" :is="type" :note="noteFromComp" @noteFromCompToNull="resetNoteFromComp"></component>    
      </div>`,
  data() {
    return {
      notes: null,
      noteFromComp: null,
      type: null,
    };
  },
  methods: {
    toEdit(note) {
      this.noteFromComp = note;
      this.type = note.type + 'Edit';
      console.log('this.noteFromComp:', this.noteFromComp);
    },
    resetNoteFromComp() {
      this.noteFromComp = null;
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
  },
  computed: {},
  created() {
    noteServices.query().then((notes) => {
      this.notes = notes;
    });
  },
};
