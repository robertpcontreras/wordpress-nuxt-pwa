import WPAPI from 'wpapi';
import config from '../app.config';
import localstorage from './local-storage';

// Create our wordpress api instance
const wp = new WPAPI({ endpoint: `${config.wpUrl}/wp-json` });

export default {
  getPostsByCategory(category, page = 1, results = 6) {
    return new Promise(async (resolve, reject) => {
      try {
        const posts = await localstorage.get(`posts.${category}.${page}`);

        if (posts !== null) {
          resolve(posts);
        }
      } catch (error) {
        // dont need to handle this error...
      }

      try {
        const query = wp.posts().embed().page(page).perPage(results);

        if (category) {
          query.categories(category);
        }

        const posts = await query.get();

        resolve(posts);
        localstorage.set(`posts.${category}.${page}`, posts);
      } catch (error) {
        reject(error);
      }
    });
  },

  getPostsByTag(tag, page = 1, results = 6) {
    return new Promise(async (resolve, reject) => {
      try {
        const posts = await localstorage.get(`posts.${tag}.${page}`);

        if (posts !== null) {
          resolve(posts);
        }
      } catch (error) {
        // dont need to handle this error...
      }

      try {
        const query = wp.posts().embed().page(page).perPage(results);

        if (tag) {
          query.tag(tag);
        }

        const posts = await query.get();

        resolve(posts);
        localstorage.set(`posts.${tag}.${page}`, posts);
      } catch (error) {
        reject(error);
      }
    });
  },

  getPost(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await localstorage.get(`post.${slug}`);

        if (post !== null) {
          resolve(post);
        }
      } catch (error) {
        // dont need to handle this error...
      }

      try {
        const data = await wp.posts().embed().slug(slug).get();
        resolve(data[0]);
        localstorage.set(`post.${slug}`, data[0]);
      } catch (error) {
        reject(error);
      }
    });
  },

  getCategories() {
    // TODO - Setup local caching...

    return new Promise((resolve, reject) => {
      wp.categories().get()
        .then(categories => resolve(categories))
        .catch(error => reject(error));
    });
  },

  getCategory(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const category = await localstorage.get(`category.${slug}`);

        if (category !== null) {
          resolve(category);
        }
      } catch (error) {
        // dont need to handle this error...
      }

      try {
        const data = await wp.categories().slug(slug).get();
        localstorage.set(`category.${slug}`, data[0]);
        resolve(data[0]);
      } catch (error) {
        reject(error);
      }
    });
  },

  getPages() {
    // TODO - Setup local caching...

    return new Promise((resolve, reject) => {
      wp.pages().get()
        .then(pages => resolve(pages))
        .catch(error => reject(error));
    });
  },

  getPageBySlug(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const page = await localstorage.get(`page.${slug}`);

        if (page !== null) {
          resolve(page);
        }
      } catch (error) {
        // Dont need to handle this error, as we are going to try and retrieve the data again next.
      }

      try {
        const data = await wp.pages().slug(slug).get();
        localstorage.set(`page.${slug}`, data[0]);
        resolve(data[0]);
      } catch (error) {
        reject(error);
      }
    });
  },

  getTagBySlug(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        const tag = await localstorage.get(`tag.${slug}`);
        if (tag !== null) {
          resolve(tag);
        }
      } catch (error) {
        // Dont need to handle this error.
      }

      try {
        const data = await wp.tags().slug(slug).get();
        localstorage.set(`tag.${slug}`, data[0]);
        resolve(data[0]);
      } catch (error) {
        reject(error);
      }
    });
  },

  getTags() {
    // TODO - Setup local caching...

    return new Promise((resolve, reject) => {
      wp.tags().get()
        .then(tags => resolve(tags))
        .catch(error => reject(error));
    });
  },

  getAuthors() {
    // TODO - Setup local caching...

    return new Promise((resolve, reject) => {
      wp.authors().get()
        .then(authors => resolve(authors))
        .catch(error => reject(error));
    });
  },
};
