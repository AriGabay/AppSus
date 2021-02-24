export default {
  props: ['note'],
  template: `
  <div>
        <h1>{{title}}</h1>
      <div v-for="(todo,idx) in todoText" :key="idx" >
        <p>{{todo.txt}}</p>
        <input type="text" v-model="todo.txt">
      </div>
  </div>
    `,
  data() {
    return {
      title: this.note.info.label,
      todoText: this.note.info.todos,
    };
  },
  methods: {},
  components: {},
  computed: {},
};
