export default {
  props: ['mail'],
  template: `
    <div class="mail-preview-container">
      <p>From: <span>{{mail.from}}</span></p>
      <p>Subject: <span>{{mail.subject}}</span></p>
      <button @click.stop="toggleReadState(mail.id)" v-if="!mail.isRead">Read</button>
      <button @click.stop="toggleReadState(mail.id)" v-if="mail.isRead">Unread</button>
    </div>`,
  data() {
    return {}
  },
  methods: {
    toggleReadState(id) {
      this.mail.isRead = !this.mail.isRead
      this.$emit('toggleRead', this.mail.isRead, id)
    }
  },
  components: {},
  computed: {},
  created() { },
}