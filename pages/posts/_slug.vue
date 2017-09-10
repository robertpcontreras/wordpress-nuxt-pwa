<template>
  <div id="article-container" class="container content">
    <div v-if="!showLoading">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul class="is-marginless">
              <li>
                <router-link :to="{ name: 'index' }">
                  Home
                </router-link>
              </li>
              <li class="is-marginless">
                <router-link :to="{ name: 'categories-slug', params: { 'slug': category.slug } }">
                  Blog
                </router-link>
              </li>
              <li class="is-active is-marginless">
                <a href="#">
                  {{ post.title.rendered }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <post-article :article="post"></post-article>
        </div>
      </div>
    </div>
    <div v-else>
      <loading />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostArticle from '../../components/Article.vue';
import Loading from '../../components/Loading.vue';

export default {

  async created() {
    try {
      await this.$store.dispatch('getPost', this.slug);
    } catch (error) {
      console.log(error);
    } finally {
      this.showLoading = false;
    }
  },

  data() {
    return {
      showLoading: true,
    };
  },

  computed: {
    ...mapState({
      post: state => state.post,
    }),

    slug() {
      return this.$route.params.slug;
    },

    category() {
      return this.post._embedded['wp:term'][0][0];
    },
  },

  components: {
    PostArticle,
    Loading,
  },
};
</script>
