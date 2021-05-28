<template>
  <div class="single-post">
    <article class="post">
      <h1>Title of the Post</h1>
      <ul class="post-details">
        <li>Last updated on XXX</li>
        <li>Writen by Name</li>
      </ul>
      <div class="post-content">Content of the post</div>
      <section class="post-feedback">
        <p>
          Let my now what you think about the post, send mail to
          <a href="mailto:test@gooogle.com">Yaroslav</a>
        </p>
      </section>
    </article>
  </div>
</template>
<style scoped>
ul,
li {
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.single-post {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4682b4;
  color: #fff;
}
.post-details {
  padding: 20px 0;
  font-size: 18px;
}
.post-feedback {
  padding: 30px 0 10px;
  font-size: 12px;
}
</style>