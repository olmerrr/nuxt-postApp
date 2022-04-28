<template>
  <div class="home-page">
    <section class="intro">
      <h1 class="intro-title">Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/ + 1'">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://store-images.s-microsoft.com/image/apps.31718.65858607118306853.bade8222-c0ad-4481-b2d6-b46cc0450658.64383f70-ff91-464e-b27e-01fde9a46c28?q=90&w=177&h=265')"></div>
          <div class="post-content">
            <h1>Preview Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>

       <nuxt-link :to="'/posts/ + 2'">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894?q=90&w=177&h=265')"></div>
          <div class="post-content">
            <h1>Preview Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.intro {
  height: 220px;
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/img/intro-backgroung.jpg");
  box-shadow: 0px 0 3px 1px rgba(0,0,0,0.35);
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.35);
  background-color: #fff;
  width: 90%;
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
  margin-top: 26px;
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
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
