import { noteServices } from '../../services/note.services.js';

export default {
  props: [],
  template: `
    <div class="flex-center-column">
      <form @submit="createNote" class="flex-center-column">
        <input type="text" placeholder="Note Text" v-model="text">
        <button>Submit</button>
      </form>
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
      this.$emit('submitBack');
    },
  },
  components: {},
  computed: {},
  created() {},
};
