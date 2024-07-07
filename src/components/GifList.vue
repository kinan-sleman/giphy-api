<template>
  <div class="giflist">
    <GifVue v-for="gif in gifs" :key="gif.id" :gif="gif" />
  </div>
</template>

<script>
import GifVue from "./GifVue.vue";
export default {
  name: "GifList",
  components: {
    GifVue,
  },
  props: {
    gifs: Array,
  },
};
</script>

<style>
    .giflist {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
</style>
