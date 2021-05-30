<template>
  <section class="post-list">
    <post-preview
      id="1"
      title="MacBook"
      thumbnail="https://i1.foxtrot.com.ua/product/MediumImages/6633196_0.jpg"
      previewText="Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem Lorem"
    >
    </post-preview>
    <post-preview
      id="2"
      title="Dell"
      thumbnail="https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/e/dell_latitude_6_.jpg"
      previewText="Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem Lorem"
    >
    </post-preview>
    <post-preview
      id="3"
      title="Huawei"
      thumbnail="https://i.citrus.ua/uploads/shop/2/e/2e6b56195c9ddbebcec6d5e7ebdf610a.jpg"
      previewText="Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem Lorem"
    >
    </post-preview>
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  components: {
    "post-preview": PostPreview,
  },
};
</script>