<template>
  <div class="home-page">
    <section class="intro">
      <h1 class="intro-title">Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
export default {
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
.intro {
  height: 220px;
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/img/intro-backgroung.jpg");
  box-shadow: 0px 0 3px 1px rgba(0, 0, 0, 0.35);
}

.intro h1 {
  position: absolute;
  top: 20%;
  left: 6%;
  font-size: 1.5rem;
  color: #fff;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
