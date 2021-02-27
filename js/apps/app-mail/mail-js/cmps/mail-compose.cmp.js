import { mailService } from '../services/mail.services.js';
import { eventBus } from '../../../../services/event-bus-service.js';
export default {
  props: [],
  template: `
    <div>
      <h1>New mail</h1>
      <form class="new-mail-container" @submit.prevent="submit">
            <label>
              To: <input v-model="to" type="text" required>
            </label>
            <label>
              Subject: <input v-model="subject" type="text" required>
            </label>
            <label>
              Text: <textarea required v-model="body" cols="30" rows="10"></textarea>
            </label>
          <button>Send</button>
      </form>
    </div>`,
  data() {
    return {
      body: '',
      subject: '',
      to: '',
    };
  },
  methods: {
    submit() {
      let newMail = {
        body: this.body,
        subject: this.subject,
        to: this.to,
      };
      if (!this.validateEmail(newMail.to)) {
        eventBus.$emit('show-msg', `Enter Valid Mail`);
        return;
      }

      eventBus.$emit('show-msg', 'Mail sent');
      this.$router.push('/mail');
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      consoe.log(re.test(String(email).toLowerCase()));
      return re.test(String(email).toLowerCase());
    },
  },
  components: {},
  computed: {},
  created() {},
};
