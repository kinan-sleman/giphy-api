<template>
  <input v-model="keyword" @input="onInput" type="text" placeholder="Type to search for an awesome GIF" />
</template>

<script>
export default {
  name: "SearchVue",
  data () {
    return {
      keyword: '',
      timeout: null,
    }
  },
  methods: {
    onInput () {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.search();
      }, 500);
    },
    search () {
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=svYEfjP6OdpZYbijnwmHGnhDpyfjAf1j&q=${this.keyword}&limit=9`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.$emit('fetch-gifs',result.data);
      })
    }
  }
};
</script>

<style scoped>
  input {
    padding: 10px 16px;
    font-size:18px;
    border-radius: 4px;
    outline: 0;
    border: 2px solid #5f5f5f;
    transition: .1s;
    display: block;
    width: 100%;
  }
  input:focus {
    border-color: #0078e0;
  }
</style>