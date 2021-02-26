export default {
  props: ['note'],
  template: `
    <div class="note-todos" @click="editNote">
    <div v-if="note.type==='noteTodos'">
        <h2>{{ note.info.label }}</h2>
          <ul>
            <li v-for="todo in note.info.todos">{{todo.txt}}</li>
          </ul>
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
};
