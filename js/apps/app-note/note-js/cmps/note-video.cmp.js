export default {
  props: ['note'],
  template: `
    <div>
      <h2>{{note.info.label}}</h2>
    <video width="320" height="240" controls>
  <source :src="note.info.link" type="video/mp4">
</video>
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