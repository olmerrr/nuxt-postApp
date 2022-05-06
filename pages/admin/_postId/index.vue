<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm 
      :post="loadedPosts"
      @submit="onSubmitted"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
  components: { 
    AdminPostForm
  },
 asyncData(context) {
   return axios.get(process.env.baseUrl+'/posts/' + context.params.postId + '.json')
   .then(res => {
     return {
       loadedPosts: {...res.data, id: context.params.postId}
     }
   })
   .catch(err => context.error(err))
 },
 methods:{
   onSubmitted(editedPost) {
     this.$store.dispatch('editPost', editedPost)
      .then(() => this.$router.push('/admin'))
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