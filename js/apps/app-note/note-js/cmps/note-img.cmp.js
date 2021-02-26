import { eventBus } from '../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
    <div class="note-img" @click="editNote">
    <div v-if="note.type==='noteImg'" :style="note.style">
        type: {{note.type}} <br/>
        Title: {{note.info.title}}
        <img :src="note.info.url" />
        <button @click.stop="removeNote">Remove Note</button>
        <button v-if="!note.isPinned" @click.stop="togglePin">📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">📍</button>
        <hr/>
        </div>
    </div>`,
  data() {
    return {};
  },
  methods: {
    editNote() {
      this.$emit('editNote', this.note);
    },
    removeNote() {
      this.$emit('removeNote', this.note);
    },
    togglePin() {
      this.$emit('togglePin', this.note);
    },
  },
  components: {},
  computed: {},
  created() {},
};
