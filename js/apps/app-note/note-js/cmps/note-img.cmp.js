export default {
  props: ['note'],
  template: `
    <div class="note-img">
    <div v-if="note.type==='noteImg'" :style="note.style">
        type: {{note.type}} <br/>
        <img :src="note.info.url" />
        <hr/>
        </div>
    </div>`,
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
  created() {
    console.log(this.note);
  },
};
