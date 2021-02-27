import { mailService } from '../services/mail.services.js'
import { eventBus } from "../../../../services/event-bus-service.js"
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
                <button @click="restoreMail(mail)">Restore</button>
                <button @click="destroyMail(mail)">X</button>
            </div>
            </li>
        </ul>
    </div>`,
    data() {
        return {
            mails: null
        }
    },
    methods: {
        restoreMail(mail) {
            mail.isDeleted = false
            mailService.updateMail(mail)
            this.filterMails()
            eventBus.$emit('show-msg', 'Mail Restored')
        },
        destroyMail(mail) {
            if (!confirm('Are you sure?')) return
            mailService.deleteMail(mail)
                .then(() => {
                    mailService.query(MAILS_KEY)
                        .then(mails => {
                            this.mails = mails
                            this.filterMails()
                        })

                    eventBus.$emit('show-msg', 'Mail Deleted')
                })

        },
        filterMails() {
            this.mails = this.mails.filter(mail => {
                return mail.isDeleted
            })
        }
    },
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