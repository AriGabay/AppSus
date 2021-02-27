import { eventBus } from '../services/event-bus-service.js';

export default {
  template: `
        <section v-if="msg" class="user-msg">
            <button @click="msg=null">x</button>
            <p>{{msg}}</p>
        </section>
    `,
  data() {
    return {
      msg: null,
    };
  },
  methods: {
    setMsg(msg) {
      this.msg = msg;
      setTimeout(() => {
        this.msg = null;
      }, 3000);
    },
  },
  created() {
    eventBus.$on('show-msg', this.setMsg);
  },
  destroyed() {
    eventBus.$off('show-msg', this.setMsg);
  },
};
