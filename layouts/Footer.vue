<template>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered columns">
          <p>
            <div class="column is-6 is-offset-3">
              <div class="columns">
                <a class="column" rel="noopener" target="_blank" :href="urls.github">
                  <img alt="Github" style="height:40px;" src="~assets/svg/github.svg" />
                </a>
                <a class="column" rel="noopener" target="_blank" :href="urls.twitter">
                  <img alt="Twitter" style="height:40px;" src="~assets/svg/twitter.svg" />
                </a>
                <a class="column"  rel="noopener" target="_blank" :href="urls.linkedIn">
                  <img alt="LinkedIn" style="height:40px;" src="~assets/svg/linkedIn.svg" />
                </a>
                <a class="column" rel="noopener" :href="urls.mail">
                  <img alt="Mail" style="height:40px;" src="~assets/svg/gmail.svg" />
                </a>
                <div class="clearfix"></div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
import config from '../app.config';

export default {
  computed: {
    urls() {
      return {
        mail: config.links.mail,
        linkedIn: config.links.linkedIn,
        twitter: config.links.twitter,
        github: config.links.github,
      };
    },
  },
};
</script>
