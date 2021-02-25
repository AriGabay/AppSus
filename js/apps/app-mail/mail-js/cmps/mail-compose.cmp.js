import { mailService } from '../services/mail.services.js'
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
      to: ''
    }
  },
  methods: {
    submit() {
      let newMail = {
        body: this.body,
        subject: this.subject,
        to: this.to
      }
      mailService.addMail(newMail)
      this.$router.push('/mail')
    }
  },
  components: {},
  computed: {},
  created() { },
}