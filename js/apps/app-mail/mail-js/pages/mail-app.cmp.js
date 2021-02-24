import { mailService } from '../services/mail.services.js';
import mailList from '../cmps/mail-list.cmp.js'
export default {
  props: [],
  template: `
    <div>
    <mail-list :mails="mails"></mail-list>


    </div>`,
  data() {
    return {
      mails: null,
    };
  },
  methods: {},
  computed: {},
  created() {
    mailService.query()
      .then(mails => this.mails = mails)
  },
  components: {
    mailList
  },
};
