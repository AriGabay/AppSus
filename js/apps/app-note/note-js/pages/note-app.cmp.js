import { noteServices } from '../services/note.services.js';
export default {
  props: [],
  template: `
    <div>
      This is a vue component of note-app
    </div>`,
  data() {
    return {
      notes: null,
    };
  },
  methods: {},
  components: {},
  computed: {},
  created() {
    this.notes = noteServices.query();
    console.log(this.notes);
  },
};
