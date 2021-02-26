export default {
  props: ['note'],
  template: `
    <div class="flex-center-column">
      <h1>{{title}}</h1>
      <video width="320" height="240" controls>
        <source :src="url" type="video/mp4">
      </video>
      <form class="flex-center-column">
    <input type="text" v-model="title">
    <input type="text" v-model="url">
    <button type="submit" @click.prevent="updateNote">Submit</button>
      </form>
    </div>`,
  data() {
    return {
      newNote: this.note,
      title: this.note.info.label,
      url: this.note.info.link,
    };
  },
  methods: {
    updateNote() {
      this.newNote.info.label = this.title;
      this.newNote.info.link = this.url;
      this.$emit('updateNote', this.newNote);
      this.$emit('submitBack');
    },
  },
  components: {},
  computed: {},
};
