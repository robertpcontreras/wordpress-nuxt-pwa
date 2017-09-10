import Vue from 'vue';

const OfflineHandler = {
  install(Vue) {
    Vue.online = true;
    Vue.prototype.$online = () => Vue.online;

    if (typeof window !== 'undefined') {
      window.addEventListener('offline', () => { Vue.online = false; });
      window.addEventListener('online', () => { Vue.online = true; });
    }
  },
};

Vue.use(OfflineHandler);
