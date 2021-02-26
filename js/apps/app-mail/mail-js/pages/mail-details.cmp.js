import { mailService } from '../services/mail.services.js'
export default {
    props: [],
    template: `
    <div class="mail-details-container" v-if="mail">
        <p>From: {{mail.from}}</p>
        <p>Subject: {{mail.subject}}<p>
        <p>At: {{displayDate}}</p>
        <p>Text: {{mail.body}}</p>
    </div>`,
    data() {
        return {
            mail: null
        }
    },
    methods: {},
    components: {},
    computed: {
        displayDate() {
            let date = new Date(this.mail.sentAt);
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let min = date.getMinutes();
            month = (month < 10 ? "0" : "") + month;
            day = (day < 10 ? "0" : "") + day;
            hour = (hour < 10 ? "0" : "") + hour;
            min = (min < 10 ? "0" : "") + min;
            const str = date.getFullYear() + "/" + month + "/" + day + "/ " + hour + ":" + min;
            return str;
        }
    },
    created() {
        const id = this.$route.params.mailId
        if (!id) return
        mailService.getmailById(id)
            .then(mail => {
                this.mail = mail
            })
    },
}