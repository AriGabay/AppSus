export default {
  props: ['note'],
  template: `
    <div class="note note-todos" :class="{readMore:isReadMore}" @click="editNote">
      <template v-if="note.type==='noteTodos'">
        <h2 class="note-todos-title">{{ note.info.label }}</h2>
        <div class="note-todos-alltxt">
          <ul class="note-todos-txt">
            <li v-for="todo in note.info.todos">{{todo.txt}}</li>
          </ul>
          </div>
          <div class="btn-pin-remove">
          <button @click.stop="removeNote">Remove Note 🗑️</button>
          <button v-if="!note.isPinned" @click.stop="togglePin">Pin 📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">Unpin 📍</button>
        <button v-if="!isReadMore"  @click.stop="readMore">Read More</button>    
        <button  v-if="isReadMore" @click.stop="readLess">Read Less</button>    
      </div>
    </template>
  </div>`,
  data() {
    return {
      isReadMore: false,
    };
  },
  methods: {
    editNote() {
      this.$emit('editNote', this.note);
    },
    removeNote() {
      this.$emit('removeNote', this.note);
    },
    togglePin() {
      this.$emit('togglePin', this.note);
    },
    readMore() {
      this.isReadMore = !this.isReadMore;
    },
    readLess() {
      this.isReadMore = !this.isReadMore;
    },
  },
  components: {},
  computed: {},
};
