export default {
  props: ['note'],
  template: `
    <div :style="style" class="note-img-edit flex-center-column">
        <div class="note-img-edit-img">
            <img :src="url">
        </div>
      <form class="flex-center-column">
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
      this.$emit('submitBack');
    },
  },
  components: {},
  computed: {},
  created() {},
};
