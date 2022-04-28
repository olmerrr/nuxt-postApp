<template>
  <section class="post-list">
    <PostPreview
      id="1"
      title="MacBook"
      thumbnail="https://i1.foxtrot.com.ua/product/MediumImages/6633196_0.jpg"
      previewText="Super text for previev"
    />
    <PostPreview
      id="2"
      title="MacBook-2"
      thumbnail="https://i1.foxtrot.com.ua/product/MediumImages/6633196_0.jpg"
      previewText="Super text for previev"
    />
       <PostPreview
      id="2"
      title="MacBook-2"
      thumbnail="https://i1.foxtrot.com.ua/product/MediumImages/6633196_0.jpg"
      previewText="Super text for previev"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  components: {
   PostPreview
  },
};
</script>
<style scoped>
.post-list {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>