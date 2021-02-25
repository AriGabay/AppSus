import { mailService } from '../services/mail.services.js'
const MAILS_KEY = 'mailsDB'
export default {
    props: [],
    template: `
    <div>
    <h1>Trashed 🗑</h1>
    <ul>
            <li class="trashed-mail" v-for="mail in mails" :key="mail.id">
            <p>From: <span>{{mail.from}}</span></p>
            <p>Subject: <span>{{mail.subject}}</span></p>
            <div class="trash-buttons-container">
                <button>Return</button>
                <button>X</button>
            </div>
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
                    return mail.isDeleted
                })
            })
    },
}