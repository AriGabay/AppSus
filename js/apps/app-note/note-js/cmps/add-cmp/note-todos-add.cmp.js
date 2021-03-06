import { noteServices } from '../../services/note.services.js';
import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  template: `
  <div>
    <div class="flex-center-column">
        <form class="flex-center-column">
          <div v-if="todos" v-for="todo in todos" :key="todo.id">
            <input type="text" v-model="todo.txt" placeholder="enter todo"/>
          </div>
        </form>
        <div class="flex-center-column">
    <input type="text" v-model="label" placeholder="label">
    <button @click="updateNote">Submit</button>
    </div>
        <div class="flex-center-column">
        <button @click="addTodo">Add Todo</button>
        </div>
    </div>

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
      eventBus.$emit('show-msg', 'Add - Success');
      this.$emit('createNewNote', newNote);
      this.$emit('submitBack');
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
