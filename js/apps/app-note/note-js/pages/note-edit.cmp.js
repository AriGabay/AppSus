export default {
  props: ['noteFromComp'],
  template: `
    <div>
        
    </div>`,
  data() {
    return {
      type: null,
      title: null,
      txt: null,
      style: null,
      url: null,
      todoText: null,
    };
  },
  methods: {
    saveChange() {},
  },
  components: {},
  computed: {},
  created() {
    // this.type = this.noteFromComp.type;
    // console.log(this.noteFromComp.type);
    // if (this.type === 'noteTxt') {
    //   this.txt = this.noteFromComp.info.txt;
    // } else if (this.type === 'noteImg') {
    //   this.title = this.noteFromComp.info.title;
    //   this.style = this.noteFromComp.style;
    //   this.url = this.noteFromComp.info.url;
    // } else if (this.type === 'noteTodos') {
    //   this.title = this.noteFromComp.info.label;
    //   this.todoText = this.noteFromComp.info.todos;
    // } else if (this.type === 'noteVideo') {
    //   this.title = this.noteFromComp.info.label;
    //   this.url = this.noteFromComp.info.url;
    // }
    console.log('this.txt:', this.txt);
    console.log('this.style:', this.style);
    console.log('this.todoText:', this.todoText);
    console.log('this.title:', this.title);
    console.log('this.type:', this.type);
    console.log('this.url:', this.url);
  },
  destroyed() {
    this.$emit('noteFromCompToNull', this.test);
  },
};
