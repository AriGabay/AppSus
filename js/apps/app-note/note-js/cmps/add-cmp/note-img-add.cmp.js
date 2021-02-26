import { noteServices } from '../../services/note.services.js';
export default {
  props: [],
  template: `
  <div>
    <form @submit="createNote" class="flex-center-column">
      <input type="text" placeholder="Note Title" v-model="title">
      <input type="color" v-model="backgroundColorFromUser">
      <input type="text" placeholder="Note Text" v-model="text">
      <input type="text" placeholder="Image Link" v-model="url">
      <button>Submit</button>
    </form>

  </div>`,
  data() {
    return {
      title: null,
      text: null,
      url: null,
      type: 'noteImg',
      backgroundColorFromUser: 'black',
    };
  },
  methods: {
    createNote() {
      if (!this.title || !this.text || !this.url || !this.backgroundColorFromUser === 'black') return;
      else {
        const newNote = {
          id: noteServices.makeId(),
          type: this.type,
          info: {
            title: this.title,
            url: this.url,
          },
          style: {
            backgroundColor: this.backgroundColorFromUser,
          },
          isPinned: false,
        };
        this.$emit('createNewNote', newNote);
        this.$emit('submitBack');
      }
    },
  },
  components: {},
  computed: {},
};
