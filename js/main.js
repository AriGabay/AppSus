import appHeader from './cmps/app-header.cmp.js';
import { myRouter } from './routes.js';

const options = {
  el: '#app',
  router: myRouter,
  template: `
        <section>
            <app-header />
            <div class="main-container main-size">
            <router-view />
            </div>
            <footer><p> &copy; Coffeerights 2021</p></footer>
        </section>
    `,
  components: {
    appHeader,
  },
  data() {
    return {
    }
  }
};

const app = new Vue(options);
