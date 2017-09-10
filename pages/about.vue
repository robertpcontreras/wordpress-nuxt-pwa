<template>
  <div>
    <div v-if="!loading" class="container content">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <page :page="page" />
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
import Page from '../components/Page.vue';
import Loading from '../components/Loading.vue';

export default {
  async created() {
    try {
      this.$store.dispatch('getPageBySlug', 'about');
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    ...mapState({
      page: state => state.page,
    }),
  },

  components: {
    Page,
    Loading,
  },
};
</script>
