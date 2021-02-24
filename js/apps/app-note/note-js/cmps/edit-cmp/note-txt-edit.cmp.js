export default {
  props: ['note'],
  template: `
    <div v-if="text">
      <h2>{{text}}</h2>
      <input type="textarea" v-model="text">
    </div>`,
  data() {
    return {
      text: this.note.info.txt,
    };
  },
  methods: {},
  components: {},
  computed: {},
};
