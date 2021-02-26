import { mailService } from '../services/mail.services.js'
const MAIL_KEY = 'mailsDB'
export default {
    props: [],
    template: `
    <div>
    <div class="sent-mails-container">
        <h2>Mails sent 📤</h2>
        <ul>
            <li class="sent-mail" v-for="mail in sentMails" :key="mail.id">
            <p>To: <span>{{mail.to}}</span></p>
      <p>Subject: <span>{{mail.subject}}</span></p>
            </li>
        </ul>
    </div>
    </div>`,
    data() {
        return {
            sentMails: null
        }
    },
    methods: {},
    components: {},
    computed: {},
    created() {
        mailService.query(MAIL_KEY)
            .then(mails => {
                this.sentMails = mails.filter(mail => {
                    return mail.isSent
                })
            })
    },
}