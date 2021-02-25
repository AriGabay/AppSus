export default {
    props: ['mailsReadedPercent'],
    template: `
    <div class="mail-status">
    <p>Readed: {{mailsReadedPercent}}%</p>
    </div>`,
    data() {
        return {
            readedMails: null
        }
    },
    methods: {

    },
    components: {},
    computed: {

    },
    created() {


    },
}
