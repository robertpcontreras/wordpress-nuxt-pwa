import wordpress from '../wordpress';

export default {
  getAllCategories({ commit }) {
    return new Promise((resolve, reject) => {
      wordpress.getCategories().then((categories) => {
        commit('GET_ALL_CATEGORIES', categories);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getCategoryPosts({ commit }, params) {
    return new Promise((resolve, reject) => {
      const page = params.page || 1;

      wordpress.getPostsByCategory(params.category, page).then((posts) => {
        commit('GET_CATEGORY_POSTS', posts);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getCategory({ dispatch, commit, state }, slug) {
    // We have been asked to get a new category so clear out the existing one from the state...
    commit('CLEAR_CATEGORY');

    return new Promise((resolve, reject) => {
      wordpress.getCategory(slug).then(async (category) => {
        commit('GET_CATEGORY', category);

        try {
          await dispatch('getCategoryPosts', { category: category.id });
          resolve();
        } catch (error) {
          reject(error);
        }
      }).catch(error => reject(error));
    });
  },

  getPost({ commit }, slug) {
    // We have been asked to get a new post so clear out the existing one from the state...
    commit('CLEAR_POST');

    return new Promise((resolve, reject) => {
      wordpress.getPost(slug).then((post) => {
        commit('GET_POST', post);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getPages({ commit }, page) {
    return new Promise((resolve, reject) => {
      wordpress.getPages(page).then((pages) => {
        commit('GET_ALL_PAGES', pages);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getPageBySlug({ commit }, slug) {
    return new Promise((resolve, reject) => {
      wordpress.getPageBySlug(slug).then((page) => {
        commit('GET_PAGE', page);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getTags({ commit }) {
    return new Promise((resolve, reject) => {
      wordpress.getTags().then((tags) => {
        commit('GET_TAGS', tags);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getTag({ dispatch, commit }, tagSlug) {
    // We have been asked to get a new tag so clear out the existing one from the state...
    commit('CLEAR_TAG');

    return new Promise((resolve, reject) => {
      wordpress.getTagBySlug(tagSlug).then(async (tag) => {
        commit('GET_TAG', tag);

        try {
          await dispatch('getPostsByTag', { tag: tag.id });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  },

  getPostsByTag({ commit }, params) {
    return new Promise((resolve, reject) => {
      const page = params.page || 1;

      wordpress.getPostsByTag(params.tag, page).then((posts) => {
        commit('GET_TAG_POSTS', posts);
        resolve();
      }).catch(error => reject(error));
    });
  },

  getAuthors({ commit }) {
    return new Promise((resolve, reject) => {
      wordpress.getAuthors().then((authors) => {
        commit('GET_AUTHORS', authors);
        resolve();
      }).catch(error => reject(error));
    });
  },
};
