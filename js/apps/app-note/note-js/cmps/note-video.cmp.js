export default {
  props: ['note'],
  template: `
    <div class="note note-video" :class="{readMore:isReadMore}" @click="editNote">
      <div class="note-video-title">
      <h2>{{note.info.label}}</h2>
    </div>
    <div class="note-video-video">
    <video width="320" height="240" controls class="video-note">
      <source :src="note.info.link" type="video/mp4">
    </video>
    </div>
    <div class="btn-pin-remove">
        <button @click.stop="removeNote">🗑️</button>
        <button v-if="!note.isPinned" @click.stop="togglePin">📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">📍</button>
        <button v-if="!isReadMore"  @click.stop="readMore">Read More</button>    
        <button  v-if="isReadMore" @click.stop="readLess">Read Less</button>    
    </div>
</div>
    `,
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
  components: {},
  computed: {},
};
