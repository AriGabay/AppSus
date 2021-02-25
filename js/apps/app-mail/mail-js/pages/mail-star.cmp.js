
import { mailService } from '../services/mail.services.js'
const MAILS_KEY = 'mailsDB'
export default {
    props: [],
    template: `
    <div>
    <h1>Stared ⭐</h1>
    <ul>
            <li class="stared-mail" v-for="mail in mails" :key="mail.id">
            <p>From: <span>{{mail.from}}</span></p>
            <p>Subject: <span>{{mail.subject}}</span></p>
            </li>
        </ul>
    </div>`,
    data() {
        return {
            mails: null
        }
    },
    methods: {},
    components: {},
    computed: {},
    created() {
        mailService.query(MAILS_KEY)
            .then(mails => {
                this.mails = mails.filter(mail => {
                    return mail.isStar
                })
            })
    },
}