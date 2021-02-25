export default {
  props: ['note'],
  template: `
  <div>
    <div >
        <form>
          <div v-if="todoObjs" v-for="todo in todoObjs" :key="todo.id">
            <input type="text" v-model="todo.txt" />
          </div>
        </form>
    </div>
    <button @click="updateNote">Submit</button>
    <input type="text" v-model="title">
  </div>
    `,
  data() {
    return {
      newNote: this.note,
      title: this.note.info.label,
      todoObjs: this.note.info.todos,
    };
  },
  methods: {
    updateTitle() {
      this.newNote.info.label = this.title;
    },
    updateNote() {
      if (!this.newNote) return;
      this.updateTitle();
      this.$emit('updateNote', this.newNote);
    },
  },
  components: {},
  computed: {},
};
