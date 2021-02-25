export default {
  props: ['note'],
  template: `
    <div class="note-txt" @click="editNote">
        type: {{note.type}} <br/>
        info: {{note.info.txt}}
        <hr/>
    </div>`,
  data() {
    return {};
  },
  methods: {
    editNote() {
      this.$emit('editNote', this.note);
    },
  },
  components: {},
  computed: {},
};
