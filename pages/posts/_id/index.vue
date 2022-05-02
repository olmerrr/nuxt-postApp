<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send email to
        <a href="mailto:testgmail@com.ua">My email</a>
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: "01",
            title: "Harry Potter (ID: " + context.route.params.id + ")",
            author: "D. Rouling",
            updatedDate: new Date(),
            content:
              "Nuxt supports traditional Vue patterns for loading data in your client-side app, such as fetching data in a component's mounted() hook. Universal apps, however, need to use Nuxt-specific hooks to be able to render data during server-side rendering. This allows your page to render with all of its required data present.",
            previewText:
              "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter...",
            thumbnail:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXy0GdgD-3wLnbfYDprhv_NkvWx4agYFiLQ&usqp=CAU",
            "is-admin": "true",
          },
        });
      }, 1000);
    })
      .then((data) => {
        return data;
      })
      .carch((err) => {
        console.log(new Error());
      });
  },
};
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>