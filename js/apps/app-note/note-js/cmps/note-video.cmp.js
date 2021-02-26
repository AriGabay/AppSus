export default {
  props: ['note'],
  template: `
    <div @click="editNote">
      <h2>{{note.info.label}}</h2>
    <video width="320" height="240" controls>
  <source :src="note.info.link" type="video/mp4">
</video>
<button @click.stop="removeNote">Remove Note</button>
<button v-if="!note.isPinned" @click.stop="togglePin">📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">📍</button>
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
};
