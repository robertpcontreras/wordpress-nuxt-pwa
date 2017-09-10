<template>
    <div>
      <div class="container content">
        <section id="blog-intro">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="box">
                <div class="columns">
                  <div class="column is-8">
                    <p v-for="paragraph in infoText" :key="paragraph">
                      {{ paragraph }}
                    </p>
                  </div>
                  <div class="column is-4">
                    <div class="profile-pic">
                      <img src="~assets/images/blog-pic.jpg" alt="Rob Contreras">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr style="margin-top: 3em">
      <category-posts title="Recent Posts..." />
    </div>
</template>

<script>
import config from '../app.config';
import lang from '../app.language';
import images from '../app.images';
import CategoryPosts from '../components/CategoryPosts.vue';

export default {

  created() {
    this.$store.dispatch('getCategoryPosts', {
      category: config.defaultCategoryId,
    });
  },


  components: {
    CategoryPosts,
  },

  data() {
    return {
      posts: [],
    };
  },

  computed: {
    infoText() {
      return lang.introText;
    },

    profilePic() {
      return `${config.wpUrl}${images.profilePic}`;
    },
  },
};
</script>

<style lang="scss">
  .profile-pic {
    text-align: center;
    align-self: center;
    margin-bottom: 0;
    img {
      object-fit: cover;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
</style>
