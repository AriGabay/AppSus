export default {
  props: ['note'],
  template: `
    <div class="note-todos" @click="editNote">
    <div v-if="note.type==='noteTodos'">
        <h2>{{ note.info.label }}</h2>
          <ul>
            <li v-for="todo in note.info.todos">{{todo.txt}}</li>
          </ul>
        <hr/>
        </div>
    </div>`,
  data() {
    return {};
  },
  methods: {
    editNote() {
      console.log('this.note:', this.note);
      this.$emit('editNote', this.note);
    },
  },
  components: {},
  computed: {},
};
