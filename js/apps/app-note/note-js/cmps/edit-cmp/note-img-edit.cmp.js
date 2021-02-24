export default {
  props: ['note'],
  template: `
    <div :style="style">
      <h5>{{title}}</h5>
      <h5>{{url}}</h5>
      <h5>{{style}}</h5>
      <input type="txt" v-model="title">
      <img :src="url">
      <input type="txt" v-model="url">
      <input type="color" v-model="style">
      
    </div>`,
  data() {
    return {
      title: this.note.info.title,
      url: this.note.info.url,
      style: this.note.style,
    };
  },
  methods: {},
  components: {},
  computed: {},
};
