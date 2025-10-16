<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
    <textarea
      required
      v-model="value"
      placeholder="Type ur note"/>
      <TagsList @onItemClick="handleTagClick" :items="tags" :selectedTags="selectedTags"/>
      <button class="btn btnPrimary" type="submit">Add new note</button>

    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";

export default {
  components: {TagsList},
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      selectedTags:[]
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value, this.selectedTags);
      this.value = '';
      this.selectedTags = [];
    },
    handleTagClick(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(tag => tag !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  textarea {
    margin-bottom: 0;
  }
}
</style>
