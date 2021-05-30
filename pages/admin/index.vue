<template>
  <div class="admin-page">
    <section class="new-post">
      <button class="create-btn" @click="$router.push('/admin/new-post')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list></post-list>
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
export default {
  components: { PostList },
};
</script>

<style scoped>
.admin-page {
  padding: 20px 0;
}
.create-btn {
  padding: 6px 14px;
  background: #58bd95;
  color: #fff;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
}
.create-btn:hover {
  transition: all .6s;
  background: #75c4a4;
  
}
.new-post {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
}
.existing-posts h1 {
  text-align: center;
}
</style>
