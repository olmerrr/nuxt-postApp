<template>
  <div class="post-page">
    <section class="featured-posts">
      <post-list></post-list>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  components: { PostList },
};
</script>

<style scoped>
</style>
