<template>
  <nuxt-link :to='postLink'>
    <article class="post-preview">
      <div
        class="post-thumbnail"
        :style="{backgroundImage: 'url('+ thumbnail +')'}"
      ></div>
      <div class="post-content">
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      </div>
    </article>
  </nuxt-link>
</template>
<script>

export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
     
    }
  }
};
</script>

<style scoped>

.post-preview {
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.35);
  background-color: #fff;
  width: 90%;
  min-width: 320px;
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  max-width: 400px;
  height: 250px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #f2ea0d;
}
</style>