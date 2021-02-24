import mailPreview from './mail-preview.cmp.js'
export default {
    props: ['mails'],
    template: `
    <div>
      <ul class="mail-list">
        <li v-for="mail in mails" :key="mail.id" >
            <!-- <router-link :to="'/mail/app/'+mail.id"> -->
            <mail-preview :class="{ read: mail.isRead}" :mail="mail" @click.native="selectMail(mail.id)" />
            <!-- </router-link> -->
        </li>
    </ul>
    </div>`,
    data() {
        return {}
    },
    methods: {
        selectMail(id) {
            this.$router.push('/mail/app/' + id)
        }
    },
    components: { mailPreview },
    computed: {},
    created() { },
}


