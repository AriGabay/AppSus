import { eventBus } from '../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
    <div class="note-img" @click="editNote">
    <div v-if="note.type==='noteImg'" :style="note.style">
        type: {{note.type}} <br/>
        Title: {{note.info.title}}
        <img :src="note.info.url" />
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
  created() {},
};
