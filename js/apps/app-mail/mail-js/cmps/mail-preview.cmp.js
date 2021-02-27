import { eventBus } from "../../../../services/event-bus-service.js"
export default {
  props: ['mail'],
  template: `
    <div class="mail-preview-container">
      <p>From: <span>{{currMail.from}}</span></p>
      <p>Subject: <span>{{currMail.subject}}</span></p>
      <div class="preview-buttons">
        <button @click.stop="reply(currMail.id)">↪</button>
        <button @click.stop="toggleReadState(currMail.id)" v-if="!currMail.isRead">📨</button>
        <button @click.stop="toggleReadState(currMail.id)" v-if="currMail.isRead">✉️</button>
        <button v-if="currMail.isStar" @click.stop="starMail">⭐</button>
        <button v-if="!currMail.isStar" @click.stop="starMail">☆</button>
        <button @click.stop="deleteMail(currMail)">x</button>
      </div>
    </div>`,
  data() {
    return {
      currMail: this.mail
    }
  },
  methods: {
    toggleReadState(id) {
      this.currMail.isRead = !this.currMail.isRead
      this.$emit('toggleRead', this.currMail.isRead, id)
    },
    deleteMail(mail) {
      mail.isDeleted = true
      this.$emit('deleteMail', mail)
      const msg = {
        txt: `Mail Deleted`,
        type: 'success'
      }
      eventBus.$emit('show-msg', msg)
    },
    reply(id) {
      this.$router.push(`/mail/compose/${id}`)
    },
    starMail() {
      this.currMail.isStar = !this.currMail.isStar
      this.$emit('starMail', this.currMail)
    }
  },
  components: {},
  computed: {},
  created() { },
}