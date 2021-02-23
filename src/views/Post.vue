<template>
  <div>
    <router-link class="link" to="/">Posts</router-link>
    <div v-if="isLoading" class="loader">
      <Loader />
    </div>
    <div class="post">
      <h2 class="post__title">{{ post && post.title }}</h2>
      <p class="post__text">{{ post && post.body }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "../utils/fetchData.js"
import Loader from "../components/Loader.vue"

export default {
  components: {
    Loader,
  },
  data() {
    return {
      post: null,
      isLoading: true,
    }
  },
  watch: {
    post() {
      return (this.isLoading = false)
    },
  },
  async mounted() {
    this.post = await fetchData(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    )
  },
}
</script>

<style lang="scss">
.link {
  padding: 2px 4px;
  position: absolute;
  top: 5px;
  left: 10px;

  font-size: 12px;
  font-family: "RocknRoll One", sans-serif;
  text-transform: uppercase;

  text-decoration: none;
  border-radius: 4px;
  color: #000;
  background: rgb(215, 234, 241);
}

.post {
  max-width: 600px;
  margin: 0 auto;

  &__title {
    text-align: center;
    font-family: "Akaya Telivigala", cursive;
    font-size: 32px;
    text-transform: uppercase;

    color: rgb(20, 29, 39);
  }

  &__text {
    font-family: "Akaya Telivigala", cursive;
    font-size: 19px;
    text-indent: 30px;
  }
}
</style>
