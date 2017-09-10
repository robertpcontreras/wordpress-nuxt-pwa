<template>
  <nav id="blog-header" class="navbar">
    <div class="container">

      <router-link :to="{ name: 'index' }" class="nav-item">
        <h1 class="blog-title title is-3 is-size-5-mobile">{{ blogTitle }}</h1>
      </router-link>

      <a class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div :class="{ 'nav-right nav-menu': true, 'is-active': activeMenu }">
        <span @click="closeMenu">
          <router-link  class="is-tab nav-item" :to="{ name: 'categories-slug', params: { slug: 'blog' } }">Blog</router-link>
        </span>
        <span @click="closeMenu">
          <router-link  class="is-tab nav-item" :to="{ name: 'about' }">About</router-link>
        </span>
        <span @click="closeMenu">
          <router-link  class="is-tab nav-item" :to="{ name: 'contact' }">Contact</router-link>
        </span>
        <div class="nav-item">
          <a class="button" target="_blank" rel="noopener" :href="githubUrl">
            <span class="icon">
              <img alt="Github" style="height:40px;" src="~assets/svg/github.svg" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import lang from '../app.language';
import config from '../app.config';

export default {
  data() {
    return {
      activeMenu: false,
    };
  },

  computed: {
    blogTitle() {
      return lang.blogTitle;
    },

    githubUrl() {
      return config.links.github;
    },
  },

  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
    },

    closeMenu() {
      this.activeMenu = false;
    },
  },

  components: {  },
};
</script>
<style>
  .blog-title {
    font-weight: 800;
    color: #000;
  }
  #blog-header .nav-menu > span > a{
    line-height: 3rem;
    vertical-align: middle;
  }
  .nav-toggle{
    position:absolute;
    right:0;
  }
</style>
