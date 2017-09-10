<template>
  <nav class="pagination is-centered">
    <ul class="pagination-list">
      <li v-for="pageNo in totalPages" :key="pageNo">
        <a :class="pageNoClass(pageNo)" @click="goToPage(pageNo)">{{ pageNo }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages', 'currentPage'],

  methods: {
    pageNoClass(pageNo) {
      return {
        'pagination-link': true,
        'is-current': pageNo === this.currentPage,
      };
    },

    goToPage(pageNo) {
      if (pageNo === this.currentPage) {
        return;
      }

      this.$emit('pageChanged', pageNo);
    },
  },

  computed: {
    totalPages() {
      return parseInt(this.pages.totalPages, 10);
    },
  },
};
</script>
