import { mailService } from '../services/mail.services.js';
import mailStatus from '../cmps/mail-status.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';


export default {
    props: [],
    template: `
    <div class="mail-main-container">
      <aside>
        <button @click="goToCompose">+Compose</button>
        <li @click="goToInbox">Inbox</li>
        <li @click="goToStared">Stared</li>
        <li @click="goToSent">Sent Mails</li>
        <li @click="goToTrash">Trash</li>
        <li><mail-status :mailsReadedPercent="mailsReadedPercent"></mail-status></li>
      </aside>
      <router-view></router-view>
    </div>`,
    data() {
        return {
            mails: null,
            currView: 'inbox'
        };
    },
    methods: {
        goToCompose() {
            this.$router.push('/mail/app/compose')
        },
        goToInbox() {
            this.currView = 'inbox'
            this.$router.push('/mail/app')
        },
        goToStared() {
            this.currView = 'stared'
            console.log('Stared');
        },
        goToSent() {
            this.currView = 'sent'
            console.log('Sent');
        },
        goToTrash() {
            this.currView = 'trash'
            console.log('Trash');
        }
    },
    computed: {
        mailsReadedPercent() {
            if (!this.mails) return
            let readedMails = this.mails.filter(mail => {
                return mail.isRead
            })
            return readedMails.length / this.mails.length * 100
        }
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },
    components: {
        mailList,
        mailStatus,
    },
};
