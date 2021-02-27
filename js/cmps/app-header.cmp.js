export default {
  template: `
   <header class="app-header main-size">
       <div class="logo">
           <h1>Appsus</h1>
       </div>
       <div class="menu-hamburg" @click="toggleMainNav">☰</div>
       <nav class="main-nav nav-phone" :class="{'show-nav-bar':isOpen}">
           <router-link active-class="active-link" to="/" exact>Home</router-link>
           <router-link to="/mail">Mail</router-link>
           <router-link to="/note">Notes</router-link>
       </nav>
    </header>
    `,
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMainNav() {
      console.log('this.isOpen:', this.isOpen);
      this.isOpen = !this.isOpen;
      console.log('this.isOpen:', this.isOpen);
    },
  },
};
