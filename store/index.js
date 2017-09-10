import Vuex from 'vuex';
import actions from './actions';
import mutationFunctions from './mutations';

export default () => new Vuex.Store({
  state: {
    posts: [],
    post: {},
    categories: [],
    category: {},
    pages: [],
    page: {},
    tags: [],
    tag: {},
    authors: [],
  },
  actions,
  mutations: mutationFunctions,
  strict: process.env.NODE_ENV !== 'production',
});
