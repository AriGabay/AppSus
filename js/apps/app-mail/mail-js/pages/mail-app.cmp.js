import { mailService } from '../services/mail.services.js';
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import { eventBus } from '../../../../services/event-bus-service.js'
import mailStatus from '../cmps/mail-status.cmp.js';

export default {
  template: `
    <div>
      <mail-filter @filtered="setFilter"></mail-filter>
      <mail-status :mailsReadedPercent="mailsReadedPercent"></mail-status>
      <mail-list :mails="mailsToShow" @delete="deleteMail" @starMail="starMail" @resetFilter="resetFilter" @toggleReadState="setReadState"></mail-list>
    


    </div>`,
  data() {
    return {
      mails: null,
      filterBy: null,
    };
  },
  methods: {
    resetFilter() {
      this.filterBy = null
    },
    deleteMail(mail) {
      // console.log(id, 'Att Mail-app');
      mailService.deleteMail(mail)
        .then(mail => { })
    },
    setReadState(state, id) {
      let newState = { state, id }
      eventBus.$emit('setState', newState)
      mailService.updateMailState(state, id)
    },
    setFilter(filterBy) {
      if (!filterBy) return
      this.filterBy = filterBy
    },
    starMail(mail) {
      mailService.starMail(mail)
        .then(res => console.log(res))
    }
  },
  computed: {
    mailsToShow() {
      let filterdMails;
      if (!this.filterBy) return this.mails
      filterdMails = this.mails.filter(mail => {
        return mail.subject.toLowerCase().includes(this.filterBy.toLowerCase())
      })
      return filterdMails
    },
    mailsReadedPercent() {
      if (!this.mails) return
      this.readedMails = this.mails.filter(mail => {
        return mail.isRead && !mail.isDeleted && !mail.isSent
      })
      const num = this.readedMails.length / this.mails.length * 100;
      const str_num = num.toString();
      const result = Number(str_num.slice(0, 2))
      return result
    }
  },
  created() {
    mailService.query()
      .then(mails => this.mails = mails)
  },
  components: {
    mailList,
    mailFilter,
    mailStatus
  },
};
