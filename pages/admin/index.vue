<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton
        class="create-post-btn"
        @click="$router.push('/admin/new-post')"
        >Create post
      </AppButton>
    </section>
    
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList 
      isAdmin
      :posts="loadedPosts"
      />
    </section>
  </div>
</template>
<script>

export default {
  layout: 'admin',
  middleware: 'auth',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
}
</script>

<style scoped>
  .admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
.create-post-btn {
  width: 120px;
}
</style>