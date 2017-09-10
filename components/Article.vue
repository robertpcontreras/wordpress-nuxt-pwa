<template>
  <div class="box" v-if="showArticle">
    <h1 class="title">{{ article.title.rendered }}</h1>

    <div class="level">
      <div class="level-left">
        <h6 class="is-marginless">
          {{ articleDate }}
          <small v-if="categories.length > 0"> in
            <router-link v-for="(category, index) in categories" :key="category.id" :to="{ name: 'categories-slug', params: { slug: category.slug } }">
              {{ category.name }}<span v-if="index != (categories.length - 1)">, </span><span v-else>.</span>
            </router-link>
          </small>
        </h6>
      </div>

      <div class="level-right tags level-right" v-if="tags && tags.length > 0">
        <router-link v-for="tag in tags" :key="tag.id" :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
          <span class="tag is-rounded">
            #{{ tag.name }}
          </span>
        </router-link>
      </div>
    </div>

    <hr>

    <div v-html="article.content.rendered"></div>
  </div>
</template>

<script>
export default {
  props: ['article'],

  computed: {
    showArticle() {
      return Object.keys(this.article).length > 0;
    },

    articleDate() {
      return new Date(this.article.date).toDateString();
    },

    tags() {
      return this.article._embedded['wp:term'][1] || [];
    },

    categories() {
      return this.article._embedded['wp:term'][0] || [];
    },
  },
};
</script>
