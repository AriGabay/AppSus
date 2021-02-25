export default {
  props: ['note'],
  template: `
  <div>
    <div >
        <form>
        <input v-if="todoObjs" type="text" v-for="(todo,idx) in todoObjs" v-model="todo.txt" >
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
      idOfTodo: this.note.info.todos.id,
      txtOfTodo: this.note.info.todos.txt,
      todo1: '',
    };
  },
  methods: {
    updateText(id) {
      if (!id) return;
      let index = this.todoObjs.findIndex((todo) => todo.id === id);
      this.newNote.info.todos[index].txt = this.txtOfTodo;
    },
    updateTitle() {
      this.newNote.info.label = this.title;
    },
    updateNote(x, ev) {
      console.log('x:', x);
      console.log('ev:', ev);
      // if (!this.newNote) return;
      // console.log(this.newNote);
      // this.updateText(todoId);
      // this.updateTitle();
      // console.log(this.newNote);
      // this.$emit('updateNote', this.newNote);
    },
  },
  components: {},
  computed: {},
};
