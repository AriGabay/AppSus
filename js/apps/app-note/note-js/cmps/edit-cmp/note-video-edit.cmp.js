export default {
  props: ['note'],
  template: `
    <div>
      <h1>{{title}}</h1>
      <video width="320" height="240" controls>
  <source :src="url" type="video/mp4">
</video>
    <input type="text" v-model="title">
    <input type="text" v-model="url">
    </div>`,
  data() {
    return {
      title: this.note.info.label,
      url: this.note.info.url,
    };
  },
  methods: {},
  components: {},
  computed: {},
};
