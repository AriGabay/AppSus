export default {
  props: ['mail'],
  template: `
    <div class="mail-preview-container">
      <p>From: <span>{{currMail.from}}</span></p>
      <p>Subject: <span>{{currMail.subject}}</span></p>
      <div class="preview-buttons">
        <button @click.stop="reply">↪</button>
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
    },
    reply() {
      console.log('X');
    },
    starMail() {
      console.log(this.currMail.isStar);
      this.currMail.isStar = !this.currMail.isStar
      this.$emit('starMail', this.currMail)
    }
  },
  components: {},
  computed: {},
  created() { },
}