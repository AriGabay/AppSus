export default {
  props: [],
  template: `
    <div>
    <form @submit="sendType">
      <select v-model="typeChoose">
        <option value="noteTxt">Note Text</option>
        <option value="noteImg">Note Image</option>
        <option value="noteVideo">Note Video</option>
        <option value="noteTodos">Note Todo</option>
      </select>
      <button>Add</button>
</form>
    </div>`,
  data() {
    return {
      typeChoose: null,
    };
  },
  methods: {
    sendType() {
      this.$emit('addByType', this.typeChoose);
    },
  },
  components: {},
  computed: {},
};
