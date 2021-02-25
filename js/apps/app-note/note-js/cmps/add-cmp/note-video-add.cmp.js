import { noteServices } from '../../services/note.services.js';
export default {
  props: [],
  template: `
  <div>
    <form @submit="createNote">
      <input type="text" placeholder="Note Title" v-model="title">
      <input type="text" placeholder="Note Text" v-model="text">
      <input type="text" placeholder="Video Link" v-model="url">
      <button>Submit</button>
    </form>
    {{title}}
    {{text}}
    {{url}}
  </div>`,
  data() {
    return {
      title: null,
      text: null,
      url: null,
      type: 'noteVideo',
    };
  },
  methods: {
    createNote() {
      if (!this.title || !this.text || !this.url) return;
      const newNote = {
        id: noteServices.makeId(),
        type: this.type,
        info: {
          label: this.title,
          link: this.url,
        },
      };
      this.$emit('createNewNote', newNote);
    },
  },
  components: {},
  computed: {},
};
