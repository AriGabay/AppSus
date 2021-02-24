import { mailService } from '../services/mail.services.js';
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
export default {
  props: [],
  template: `
    <div>
    <mail-filter @filtered="setFilter"></mail-filter>
    <button @click="showAll">Show All</button>
    <mail-list :mails="mailsToShow" @toggleReadState="setReadState"></mail-list>


    </div>`,
  data() {
    return {
      mails: null,
      filterBy: null,
    };
  },
  methods: {
    showAll() {
      this.filterBy = null
    },
    setReadState(state, id) {
      mailService.updateMailState(state, id)
    },
    setFilter(filterBy) {
      if (!filterBy) return
      this.filterBy = filterBy

    }
  },
  computed: {
    mailsToShow() {
      let filterdMails;
      if (!this.filterBy) return this.mails
      filterdMails = this.mails.filter(mail => {
        return mail.subject.toLowerCase().includes(this.filterBy)
      })
      console.log(filterdMails);
      return filterdMails

    }
  },
  created() {
    mailService.query()
      .then(mails => this.mails = mails)
  },
  components: {
    mailList,
    mailFilter
  },
};
