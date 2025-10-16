<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit"/>
    <List @onRemove="handleRemove" :items="notes"/>
  </div>
</template>
<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: {Form, List},
  data() {
    return {
      notes: [{
        title: 'Learn Vue 3',
        tags: ['work']
      },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        }
      ]
    }
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true,
    }
  },
  methods: {
    handleSubmit(title, tags) {
      const note = {
        title: title,
        tags: tags
      };
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    }
  }
}
</script>
