export default {
  props: ['note'],
  template: `
    <div class="note-txt" @click="editNote">
    <div v-if="note.type==='noteTxt'">
        type: {{note.type}} <br/>
        info: {{note.info.txt}}
        <hr/>
      </div>
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
