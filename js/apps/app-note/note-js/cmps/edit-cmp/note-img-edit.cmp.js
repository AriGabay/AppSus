export default {
  props: ['note'],
  template: `
    <div :style="style">
      <h5>{{title}}</h5>
      <h5>{{url}}</h5>
      <h5>{{style}}</h5>
      <img :src="url">
      <form>
        <input type="txt" v-model="title">
        <input type="txt" v-model="url">
        <input type="color" v-model="style">
        <button type="submit" @click.prevent="updateNote">Submit</button>
      </form>
      
    </div>`,
  data() {
    return {
      newNote: this.note,
      title: this.note.info.title,
      url: this.note.info.url,
      style: 'black',
    };
  },
  methods: {
    updateNote() {
      this.newNote.info.title = this.title;
      this.newNote.info.url = this.url;
      this.newNote.style.backgroundColor = this.style;
      this.$emit('updateNote', this.newNote);
    },
  },
  components: {},
  computed: {},
  created() {},
};
