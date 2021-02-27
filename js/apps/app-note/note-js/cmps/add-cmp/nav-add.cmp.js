import { eventBus } from '../../../../../services/event-bus-service.js';
export default {
  props: [],
  template: `
    <div>
    <form @submit.prevent="sendType">
      <label for="selectTypeValue">Select note type to add</label>
      <select v-model="typeChoose" id="selectTypeValue">
      <option value="" disabled selected>Select your option</option>
        <option selected value="noteTxt">Note Text</option>
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
      this.$emit('submitBack');
    },
  },
  components: {},
  computed: {},
};
