<template>
    <div>
      <div v-if="!showLoading">
        <div class="container content">
          <section id="blog-intro">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <h1 class="title is-2 is-spaced"><b>#{{ tagName }}</b></h1>
                <h2 class="subtitle is-5">All posts associated with the <b>{{ tagName.toLowerCase() }}</b> tag</h2>
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
      await this.$store.dispatch('getTag', this.tagSlug);
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
      tag: state => state.tag,
    }),

    tagName() {
      return this.tag.name || '';
    },

    tagSlug() {
      return this.$route.params.slug;
    },
  },
};
</script>
