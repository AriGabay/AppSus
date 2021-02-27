export default {
  props: ['mailsReadedPercent'],
  template: `
    <div class="mail-status">
    <p>Read: {{mailsReadedPercent}}%</p>
    </div>`,
  data() {
    return {
      readedMails: null,
    };
  },
  methods: {},
  components: {},
  computed: {},
  created() { },
};
