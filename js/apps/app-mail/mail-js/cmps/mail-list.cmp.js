import mailPreview from './mail-preview.cmp.js'
export default {
    props: ['mails'],
    template: `
    <div>
    <h1>Inbox 📥</h1>
      <ul class="mail-list">
          <div class="list-button-container">
              <button @click="showAll">Show All</button>
              <button v-if="readState" @click="showRead">Show Un Reads</button>
              <button v-if="!readState" @click="showRead">Show Reads</button>
            </div>
            <li v-for="mail in mails" :key="mail.id" >
            <mail-preview v-if="!mail.isDeleted && !mail.isSent && readState === mail.isRead " :class="{ read: mail.isRead}" :mail="mail" @starMail="starMail" @deleteMail="deleteMail" @toggleRead="toggleRead" @click.native="selectMail(mail.id)" />
            <mail-preview v-else-if="!mail.isDeleted &&  !mail.isSent && readState === null " :class="{ read: mail.isRead}" :mail="mail" @starMail="starMail" @deleteMail="deleteMail" @toggleRead="toggleRead" @click.native="selectMail(mail.id)" />
        </li>
    </ul>
    </div>`,
    data() {
        return {
            readState: null
        }
    },
    methods: {
        showAll() {
            this.readState = null
            this.$emit('resetFilter')

        },
        deleteMail(mail) {
            this.$emit('delete', mail)
        },
        selectMail(id) {
            this.$router.push('/mail/' + id)
        },
        toggleRead(state, id) {
            this.$emit('toggleReadState', state, id)
        },
        showRead() {
            this.readState = !this.readState
        },
        starMail(mail) {
            this.$emit('starMail', mail)
        }
    },
    components: {
        mailPreview,
    },
    computed: {
    },
    created() { },
}


