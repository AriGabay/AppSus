export default {
  props: ['note'],
  template: `
    <div class="note note-txt" :class="{readMore:isReadMore}" @click="editNote">
      <div class="note-txt-type">
      Type: {{note.type}}
      </div>
      <div class="note-txt-txt">
        Text: {{note.info.txt}}
      </div>
        <div class="btn-pin-remove">
        <button @click.stop="removeNote">Remove Note 🗑️</button>
        <button v-if="!note.isPinned" @click.stop="togglePin">Pin 📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">Unpin 📍</button>
        <button v-if="!isReadMore"  @click.stop="readMore">Read More</button>    
        <button  v-if="isReadMore" @click.stop="readLess">Read Less</button>    
      </div>  
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
      console.log('this.isReadMore:', this.isReadMore);
      this.isReadMore = !this.isReadMore;
    },
    readLess() {
      this.isReadMore = !this.isReadMore;
    },
  },
  computed: {},
  components: {},
};
