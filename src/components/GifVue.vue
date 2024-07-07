<template>
  <div
    target="_blank"
    class="gif"
    :style="`background-image: url(${gif.images.original.url})`"
  >
    <input readonly type="text" ref="url" :value="gif.images.original.url" style="flex: 1"/>
    <button @click="copy">Copy</button>
  </div>
</template>

<script>
export default {
  name: "GifVue",
  props: {
    gif: Object,
  },
  methods: {
    copy() {
      this.$refs.url.select();
      document.execCommand("copy");
      this.$refs.url.value = "Copied !";
    },
  },
};
</script>

<style scoped>
.gif {
  width: 240px;
  height: 240px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

input {
  all: unset;
  width: 70%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  all: unset;
  width: 28%;
  background: #079107;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: 0.2s;
}

button:hover {
  background: #09BD09;
}
</style>
