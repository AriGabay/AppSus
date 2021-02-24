export default {
    props: [],
    template: `
    <div>
      <h1>New mail</h1>
      <form @submit="submit">
          <input type="text">
          
          <button>Send</button>
      </form>
    </div>`,
    data() {
        return {}
    },
    methods: {
        submit() {
            console.log('x');
        }
    },
    components: {},
    computed: {},
    created() { },
}