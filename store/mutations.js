/* eslint-disable no-param-reassign */

export default {
  GET_ALL_CATEGORIES(state, categories) {
    state.categories = categories;
  },

  GET_CATEGORY_POSTS(state, posts) {
    state.posts = posts;
  },

  GET_CATEGORY(state, category) {
    state.category = category;
  },

  CLEAR_CATEGORY(state) {
    state.category = {};
  },

  GET_POST(state, post) {
    state.post = post;
  },

  CLEAR_POST(state) {
    state.post = {};
  },

  GET_ALL_PAGES(state, pages) {
    state.pages = pages;
  },

  GET_PAGE(state, page) {
    state.page = page;
  },

  GET_TAGS(state, tags) {
    state.tags = tags;
  },

  GET_TAG(state, tag) {
    state.tag = tag;
  },

  CLEAR_TAG(state) {
    state.tag = {};
  },

  GET_TAG_POSTS(state, posts) {
    state.posts = posts;
  },

  GET_AUTHORS(state, authors) {
    state.authors = authors;
  },
};
