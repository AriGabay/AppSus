import { noteServices } from '../../services/note.services.js';
import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  props: [],
  template: `
  <div>
    <form @submit="createNote" class="flex-center-column">
      <input type="text" placeholder="Note Title" v-model="title">
      <input type="text" placeholder="Note Text" v-model="text">
      <input type="text" placeholder="Video link" v-model="url">
      <button>Submit</button>
    </form>
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
        isPinned: false,
      };
      if (this.validateUrl(newNote.info.link)) {
        eventBus.$emit('show-msg', 'Add - Success');
        this.$emit('createNewNote', newNote);
        this.$emit('submitBack');
      } else {
        eventBus.$emit('show-msg', 'Set link Video');
      }
    },
    validateUrl(value) {
      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        value
      );
    },
  },
  components: {},
  computed: {},
};
