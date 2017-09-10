<template>
  <section id="blog-posts">
    <div v-if="!showLoader">
      <div v-if="posts.length > 0">
        <div class="container content">
          <div class="columns" v-if="title">
            <div class="column is-8 is-offset-2">
              <h2 class="title is-4" id="category-title">
                {{ title }}
              </h2>
            </div>
          </div>
          <div class="columns" v-for="post in posts" :key="post.id">
            <div class="column is-8 is-offset-2">
              <post-preview :post="post" />
            </div>
          </div>
        </div>
        <div v-if="posts._paging.totalPages > 1" class="colums">
          <div class="column is-8 is-offset-2">
            <paging :pages="posts._paging || []" :current-page="currentPage" @pageChanged="changePage" />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="container content">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <h2 class="title is-4" id="category-title">
                Application offline... cannot retrieve posts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <loading />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import PostPreview from './PostPreview.vue';
import Paging from './Paging.vue';
import Loading from './Loading.vue';

export default {
  props: ['title'],

  components: {
    PostPreview,
    Paging,
    Loading,
  },

  data() {
    return {
      currentPage: 1,
      loading: false,
    };
  },

  computed: {
    ...mapState({
      posts: state => state.posts,
    }),

    showLoader() {
      if (this.loading === true) {
        return true;
      }
      if (this.posts.length > 0) {
        return false;
      }
      return this.$online();
    },
  },

  methods: {
    changePage(page) {
      this.loading = true;
      document.getElementById('blog-posts').scrollIntoView();
      this.$store.dispatch('getCategoryPosts', {
        page,
        categoryId: this.categoryId,
      }).then(() => {
        this.currentPage = page;
        this.loading = false;
      }).catch(() => {
        alert('There was an error. Please refresh the page and try again.');
      });
    },
  },
};
</script>

<style>
  #blog-posts{
    position: relative;
    min-height: 650px;
  }
</style>
