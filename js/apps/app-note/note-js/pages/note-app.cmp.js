import { noteServices } from '../services/note.services.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteTodos from '../cmps/note-todos.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
export default {
  props: [],
  template: `
    <div class="notes-preview" v-if="notes">
      <div v-for="note in notes">
        <div v-if="note.type">
            <component :is="note.type" :note="note"></component>
      </div>
      </div>
      </div>`,
  data() {
    return {
      notes: null,
    };
  },
  methods: {},
  components: {
    noteTxt,
    noteTodos,
    noteImg,
    noteVideo,
  },
  computed: {},
  created() {
    noteServices.query().then((notes) => {
      this.notes = notes;
    });
  },
};
