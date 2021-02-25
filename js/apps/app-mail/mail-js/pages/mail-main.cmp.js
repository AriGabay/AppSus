import { mailService } from '../services/mail.services.js';
import mailStatus from '../cmps/mail-status.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';
import { eventBus } from '../../../../services/event-bus-service.js'


export default {
    props: [],
    template: `
    <div class="mail-main-container">
      <aside class="mail-main-nav">
        <button @click="goToCompose">+Compose</button>
        <li @click="goToInbox">Inbox</li>
        <li @click="goToStared">Stared</li>
        <li @click="goToSent">Sent Mails</li>
        <li @click="goToTrash">Trash</li>
      </aside>
      <div class="main-mail-app-container">
          <router-view></router-view>
        </div>
    </div>`,
    data() {
        return {
            mails: null,
            currView: 'inbox',
            readedMails: null

        };
    },
    methods: {
        goToCompose() {
            this.$router.push('/mail/compose')
        },
        goToInbox() {
            this.currView = 'inbox'
            this.$router.push('/mail')
        },
        goToStared() {
            this.currView = 'stared'
            this.$router.push('/mail/stared')
        },
        goToSent() {
            this.currView = 'sent'
            this.$router.push('/mail/sent')
        },
        goToTrash() {
            this.currView = 'trash'
            this.$router.push('/mail/trashed')

        }
    },
    computed: {
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
        // eventBus.$on('mailStateChange', mail)

    },
    components: {
        mailList,
        mailStatus,

    },
    watch: {
    }
};
