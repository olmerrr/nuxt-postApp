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
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
  asyncData(context, callback) {
    setTimeout(() => {
      // return {
        callback(null, {  loadedPosts: [
          {
            id: "1",
            title: "first post1",
            previewText: "Some text",
            thumbnail:
              "https://media.vogue.de/photos/602e4631b9572024fb980cbe/4:3/w_1079,h_809,c_limit/e-girls-richchocolit.jpg",
            "is-admin": "true",
          },
          {
            id: "2",
            title: "first post2",
            previewText: "Some tex-2",
            thumbnail:
              "https://media.vogue.de/photos/602e4631b9572024fb980cbe/4:3/w_1079,h_809,c_limit/e-girls-richchocolit.jpg",
            "is-admin": "true",
          },
        ],})
      
      // };
    }, 1000);
  },
  // created() {
  // }
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
