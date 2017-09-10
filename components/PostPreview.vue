<template>
  <div id="post-preview" class="box">
    <div class="columns">
      <div :class="{ 'column': true, 'is-8': hasFeaturedImage }">
        <router-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          <h1 class="title blog-title">
            {{ post.title.rendered }} <span class="tag is-rounded is-success" v-if="isNew(post.date)">New</span>
          </h1>
        </router-link>
        <h6 class="subtitle is-6 post-date">
          {{ formatDate(post.date) }}
          <small v-if="categories.length > 0"> in
            <router-link v-for="(category, index) in categories" :key="category.id" :to="{ name: 'categories-slug', params: { slug: category.slug } }">
              {{ category.name }}<span v-if="index != (categories.length - 1)">, </span><span v-else>.</span>
            </router-link>
          </small>
        </h6>
        <div class="post-excerpt" v-html="post.excerpt.rendered"></div>
        <div class="tags" v-if="tags.length > 0">
          <router-link v-for="tag in tags" :key="tag.id" :to="{ name: 'tags-slug', params: { slug: tag.slug } }">
            <span class="tag is-rounded">
              #{{ tag.name }}
            </span>
          </router-link>
        </div>
      </div>
      <div class="column is-4" v-if="hasFeaturedImage">
        <figure class="image featured-image-thumbnail is-rounded">
          <img :src="featuredImageThumbnail" :alt="featuredImageAltText">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],

  computed: {
    hasFeaturedImage() {
      return this.post._embedded['wp:featuredmedia'] !== undefined;
    },

    tags() {
      return this.post._embedded['wp:term'][1] || [];
    },

    categories() {
      return this.post._embedded['wp:term'][0] || [];
    },

    featuredImageThumbnail() {
      if (this.post._embedded['wp:featuredmedia'] === undefined) {
        return '';
      }

      return this.post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
    },

    featuredImageAltText() {
      if (this.post._embedded['wp:featuredmedia'] === undefined) {
        return '';
      }

      return this.post._embedded['wp:featuredmedia'][0].alt_text;
    },
  },

  methods: {
    isNew(date) {
      const dateObj = new Date(date);
      dateObj.setDate(dateObj.getDate() + 6);

      // If it is posted in the last 6 days
      return dateObj.getTime() - (new Date().getTime()) > 0;
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss">
  @import '../assets/sass/_variables';

  .tags {
    .tag {
      margin-left: 2px;
      margin-right: 2px;
    }
  }

  #post-preview {
    .title .tag {
      margin-left: 10px;
      margin-right: 10px;
    }
    .post-date {
      color: #ababab;
    }
    .post-excerpt {
      margin: 20px 0;
    }
    .blog-title {
      font-weight: 800;
    }
    .is-rounded img {
      object-fit: cover;
      border-radius: 50%;
      vertical-align: middle;
    }
    .featured-image-thumbnail {
      max-width: 200px;
      margin: 0 auto;
    }
  }
</style>
