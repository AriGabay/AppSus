export default {
  template: `
   <header class="app-header">
       <div class="logo">
           <h1>Logo</h1>
       </div>
       <nav>
           <router-link active-class="active-link" to="/" exact>Home</router-link> |
           <router-link to="/mail">Mail</router-link> |
           <router-link to="/note">Notes</router-link>
       </nav>
    </header>
    `,
};
