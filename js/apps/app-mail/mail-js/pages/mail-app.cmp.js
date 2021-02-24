import { mailServices } from '../services/mail.services.js';
export default {
  props: [],
  template: `
    <div>
      This is a vue component of Mail
    </div>`,
  data() {
    return {
      mails: null
    };
  },
  methods: {},
  computed: {},
  created() {
    mailServices.query()
      .then(emails => this.mails = emails)
  },
  components: {},
};
