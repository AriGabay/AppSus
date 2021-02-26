export default {
  props: ['mailsReadedPercent'],
  template: `
    <div class="mail-status">
    <p>Unread: {{mailsReadedPercent}}%</p>
    </div>`,
  data() {
    return {
      readedMails: null,
    };
  },
  methods: {},
  components: {},
  computed: {},
  created() {},
};
