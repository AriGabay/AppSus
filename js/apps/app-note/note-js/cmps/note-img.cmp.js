import { eventBus } from '../../../../services/event-bus-service.js';
export default {
  props: ['note'],
  template: `
    <div v-if="note.type==='noteImg'" class="note note-img" :class="{readMore:isReadMore}" @click="editNote" :style="note.style">
      <div class="note-img-type"> Type: {{note.type}} </div>
      <div class="note-img-title"> Title: {{note.info.title}} </div>
      <div class="note-img-img"> <span>Image:</span>
        <img :src="note.info.url" />
      </div>
      <div class="btn-pin-remove"> 
        <button @click.stop="removeNote">🗑️</button>
        <button v-if="!note.isPinned" @click.stop="togglePin">📌</button>
        <button v-if="note.isPinned" @click.stop="togglePin">📍</button>    
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
      this.isReadMore = !this.isReadMore;
    },
    readLess() {
      this.isReadMore = !this.isReadMore;
    },
  },
  components: {},
  computed: {},
  created() {},
};
