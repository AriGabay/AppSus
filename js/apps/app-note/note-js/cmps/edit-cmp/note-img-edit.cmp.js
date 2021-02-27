import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
    <div :style="style" class="note-img-edit flex-center-column">
        <div class="note-img-edit-img">
            <img :src="url">
        </div>
      <form class="flex-center-column">
        <input type="txt" v-model="title">
        <input type="txt" v-model="url">
        <input type="color" v-model="style">
        <button type="submit" @click.prevent="updateNote">Submit</button>
      </form>
      
    </div>`,
  data() {
    return {
      newNote: this.note,
      title: this.note.info.title,
      url: this.note.info.url,
      style: 'black',
    };
  },
  methods: {
    updateNote() {
      this.newNote.info.title = this.title;
      this.newNote.info.url = this.url;
      this.newNote.style.backgroundColor = this.style;
      if (this.validateUrl(this.newNote.info.url)) {
        eventBus.$emit('show-msg', 'Edit - Success');
        this.$emit('updateNote', this.newNote);
        this.$emit('submitBack');
      } else {
        eventBus.$emit('show-msg', 'Set link Image');
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
  created() {},
};
