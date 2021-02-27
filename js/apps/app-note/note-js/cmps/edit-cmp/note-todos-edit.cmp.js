import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
  <div>
    <div >
      <div class="flex-center-column flex-center-column">
      <input type="text" v-model="title">
        </div>
        <form class="flex-center-column">
          <div v-if="todoObjs" v-for="todo in todoObjs" :key="todo.id">
            <input type="text" v-model="todo.txt" />
          </div>
        </form>
    </div>
    <div class="flex-center-column">
    <button @click="updateNote">Submit</button>
</div>
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
      eventBus.$emit('show-msg', 'Edit - Success');
      this.updateTitle();
      this.$emit('updateNote', this.newNote);
      this.$emit('submitBack');
    },
  },
  components: {},
  computed: {},
};
