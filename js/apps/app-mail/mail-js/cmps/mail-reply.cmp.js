import { mailService } from '../services/mail.services.js'
export default {
  props: [],
  template: `
    <div>
      <h1>Replay mail</h1>
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
      repliedMail: null
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
  created() {
    mailService.getmailById(this.$route.params.mailId)
      .then(mail => {
        this.repliedMail = mail
        this.body = this.repliedMail.body + `\n\n Re:`
        this.subject = `Re: ` + this.repliedMail.subject
        this.to = this.repliedMail.from
      })
  },
}