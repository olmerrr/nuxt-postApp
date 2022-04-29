<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
  components: { 
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Yaroslav',
        title: 'My Post from Kiev',
        content: 'Hello, i am fine! How are you? Please, write me soon',
        thumbnailLink: 'https://akket.com/wp-content/uploads/2020/12/Apple-Car-Elektromobil-Transport-Avtomobil-2.jpg',
      }
    }
  }
}
</script>
<style scoped>
 .update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>