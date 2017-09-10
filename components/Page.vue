<template>
  <div class="box" v-if="showPage">
    <h1 class="title">{{ page.title.rendered }}</h1>

    <hr>

    <div v-html="page.content.rendered"></div>
  </div>
</template>

<script>

export default {
  props: ['page'],

  computed: {
    showPage() {
      if (!this.page || typeof this.page !== 'object') {
        return false;
      }

      return Object.keys(this.page).length > 0;
    },
  },
};
</script>
