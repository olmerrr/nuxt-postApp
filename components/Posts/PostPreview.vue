<template>
   <nuxt-link :to="'/posts/' + id">
        <article class="post-preview">
          <img class="post-thumbnail" :src="thumbnail" alt="img"/>
          <div class="post-content">
            <h1 class="title">{{title}}</h1>
            <p class="prev-text">{{previewText}}</p>
          </div>
        </article>
      </nuxt-link>
</template>
<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .post-content {
    padding: 30px;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
  .post-thumbnail {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    position: relative;
    padding: 30px;  
}

</style>