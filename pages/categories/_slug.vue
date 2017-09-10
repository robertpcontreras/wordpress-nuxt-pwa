<template>
    <div>
      <div v-if="!showLoading">
        <div class="container content">
          <section id="blog-intro">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <h1 class="title is-2 is-spaced"><b>{{ categoryName }}</b></h1>
                <h5 class="subtitle">All posts in the <b>{{ categoryName.toLowerCase() }}</b> category</h5>
                <hr>
              </div>
            </div>
          </section>
        </div>
        <category-posts />
      </div>
      <div v-else>
        <loading />
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CategoryPosts from '../../components/CategoryPosts.vue';
import Loading from '../../components/Loading.vue';

export default {

  async created() {
    try {
      await this.$store.dispatch('getCategory', this.categorySlug);
    } catch (error) {
      console.log(error);
    } finally {
      this.showLoading = false;
    }
  },

  components: {
    CategoryPosts,
    Loading,
  },

  data() {
    return {
      showLoading: true,
    };
  },

  computed: {
    ...mapState({
      category: state => state.category,
    }),

    categoryName() {
      return this.category.name || '';
    },

    categorySlug() {
      return this.$route.params.slug;
    },
  },
};
</script>

<style>

</style>
