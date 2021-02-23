<template>
  <div>
    <h1 class="title">Posts</h1>
    <div v-if="!posts.length" class="loader">
      <Loader />
    </div>
    <div v-else class="posts">
      <div class="posts__item" v-for="post in posts" :key="post.id">
        <router-link class="posts__link" :to="`/post/${post.id}`">
          {{ post.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "../utils/fetchData.js"
import Loader from "../components/Loader.vue"

export default {
  name: "ListOfPosts",
  components: { Loader },
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    this.posts = await fetchData("https://jsonplaceholder.typicode.com/posts")
  },
}
</script>

<style lang="scss">
.title {
  text-align: center;

  font-size: 32px;
  font-family: "RocknRoll One", sans-serif;
  text-transform: uppercase;
}

.posts {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    width: 30%;
    min-width: 300px;
    margin-bottom: 8px;
    padding: 8px;

    border-radius: 0.5rem;
    box-shadow: 2px 2px 8px rgb(241, 237, 237);
  }

  &__link {
    display: block;
    width: 100%;
    height: 100%;

    font-family: "Akaya Telivigala", cursive;
    font-size: 20px;
    text-decoration: none;
    color: rgb(97, 112, 128);

    &:hover {
      color: rgb(20, 29, 39);
    }

    &:visited {
      color: rgb(152, 164, 177);
    }
  }
}

.loader {
  width: 80px;
  margin: 200px auto;
}

@media (max-width: 992px) {
  .posts {
    &__item {
      width: 47%;
    }
  }
}

@media (max-width: 768px) {
  .posts {
    &__item {
      width: 100%;
    }
  }
}
</style>
