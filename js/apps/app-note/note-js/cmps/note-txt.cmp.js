export default {
  props: ['note'],
  template: `
    <div class="note-txt">
    <div v-if="note.type==='noteTxt'">
        type: {{note.type}} <br/>
        info: {{note.info.txt}}
        <hr/>
      </div>
    </div>`,
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
};
