export default {
    template: `
    <section class="mail-filter">
        <label>Search</label>    
        <form @submit.prevent="setFilter">
            <input type="text" placeholder="Search emails" v-model="filterBy.byName">
            <button>Find</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy.byName)
        }
    }
}