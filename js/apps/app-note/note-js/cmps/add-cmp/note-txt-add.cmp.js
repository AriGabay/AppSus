import { noteServices } from '../../services/note.services.js';

export default {
  props: [],
  template: `
    <div>
      <form @submit="createNote">
        <input type="text" placeholder="Note Title" v-model="title">
        <input type="text" placeholder="Note Text" v-model="text">
        <button>Submit</button>
      </form>
      {{title}}
      {{text}}
    </div>`,
  data() {
    return {
      title: null,
      text: null,
      type: 'noteTxt',
    };
  },
  methods: {
    createNote() {
      if ((!this.title && this.text) || (this.title && !this.text)) return;
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
