import { noteServices } from '../../services/note.services.js';

export default {
  template: `
  <div>
    <div >
        <form>
          <div v-if="todos" v-for="todo in todos" :key="todo.id">
            <input type="text" v-model="todo.txt" placeholder="enter todo"/>
          </div>
        </form>
        <button @click="addTodo">Add Todo</button>
    </div>
    <input type="text" v-model="label" placeholder="label">
    <button @click="updateNote">Submit</button>
  </div>
    `,
  data() {
    return {
      label: null,
      todos: [],
    };
  },
  methods: {
    updateNote() {
      const newNote = {
        info: {
          label: this.label,
          todos: this.todos,
        },
        isPinned: false,
        type: 'noteTodos',
      };
      this.$emit('createNewNote', newNote);
    },
    addTodo() {
      this.todos.push({
        id: noteServices.makeId(),
        txt: null,
        doneAt: null,
      });
    },
  },
  components: {},
  computed: {},
};
