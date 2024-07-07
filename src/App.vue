<template>
  <SearchVue @fetch-gifs="onFetch" />
  <GifList :gifs="gifs" />
</template>

<script>
import SearchVue from "./components/SearchVue.vue";
import GifList from "./components/GifList.vue";
export default {
  name: "App",
  components: {
    SearchVue,
    GifList,
  },
  data() {
    return {
      gifs: [],
    };
  },
  methods: {
    onFetch(result) {
      this.gifs = result;
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  padding: 50px;
  background-color: cyan;
}
</style>
