export default {
  props: ['note'],
  template: `
    <div class="note-txt" @click="editNote">
        type: {{note.type}} <br/>
        info: {{note.info.txt}}
        <button @click.stop="removeNote">Remove Note</button>
        <button v-if="!note.isPinned" @click.stop="togglePin">📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">📍</button>
        <hr/>
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
  computed: {},
  components: {},
};
