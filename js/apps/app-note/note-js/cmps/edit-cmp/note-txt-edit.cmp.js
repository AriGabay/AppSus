export default {
  props: ['note'],
  template: `
    <div v-if="text">
      <h2>{{text}}</h2>
      <form>
      <input type="textarea" v-model="text">
      <button type="submit" @click.prevent="updateNote">Submit</button>
      </form>
    </div>`,
  data() {
    return {
      newNote: this.note,
      text: this.note.info.txt,
    };
  },
  methods: {
    updateNote() {
      this.newNote.info.txt = this.text;
      this.$emit('updateNote', this.newNote);
    },
  },
  components: {},
  computed: {},
};
