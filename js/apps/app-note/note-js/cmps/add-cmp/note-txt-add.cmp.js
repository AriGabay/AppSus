import { noteServices } from '../../services/note.services.js';

export default {
  props: [],
  template: `
    <div>
      <form @submit="createNote">
        <input type="text" placeholder="Note Text" v-model="text">
        <button>Submit</button>
      </form>
      {{text}}
    </div>`,
  data() {
    return {
      text: null,
      type: 'noteTxt',
    };
  },
  methods: {
    createNote() {
      const newNote = {
        id: noteServices.makeId(),
        type: this.type,
        info: {
          txt: this.text,
        },
        isPinned: false,
      };
      this.$emit('createNewNote', newNote);
    },
  },
  components: {},
  computed: {},
  created() {},
};
