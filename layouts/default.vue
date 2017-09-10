<template>
  <div id="app">
    <app-header></app-header>
    <section class="main-section section">
      <div>
        <nuxt/>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './Header.vue';
import AppFooter from './Footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
  @import '../assets/sass/_variables.scss';
  @import '~bulma';

  #app > .main-section{
    background-color: $background;
  }
  #app > .main-section.section{
    min-height: 800px;
  }
</style>
