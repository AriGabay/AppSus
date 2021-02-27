import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
    <div class="flex-center-column">
      <h1>{{title}}</h1>
      <video width="320" height="240" controls>
        <source :src="url" type="video/mp4">
      </video>
      <form class="flex-center-column">
    <input type="text" v-model="title">
    <input type="text" v-model="url">
    <button type="submit" @click.prevent="updateNote">Submit</button>
      </form>
    </div>`,
  data() {
    return {
      newNote: this.note,
      title: this.note.info.label,
      url: this.note.info.link,
    };
  },
  methods: {
    updateNote() {
      this.newNote.info.label = this.title;
      this.newNote.info.link = this.url;
      if (this.validateUrl(this.newNote.info.url)) {
        eventBus.$emit('show-msg', 'Edit - Success');
        this.$emit('updateNote', this.newNote);
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
