<template>
  <div class="tags-list">
    <div class="tag-item" v-for="(item) in items" :key="item"
         @click="$emit('onItemClick',item)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }
}

</style>
