import localforage from 'localforage';

export default {
  get(key) {
    return (typeof window !== 'undefined') ? new Promise((resolve, reject) => {
      localforage.getItem(key)
        .then((value) => {
          if (process.env.NODE_ENV !== 'production' && value) {
            console.log('Cache hit!!');
          }
          resolve(value);
        })
        .catch(error => reject(error));
    }) : null;
  },

  set(key, value) {
    return (typeof window !== 'undefined') ? new Promise((resolve, reject) => {
      localforage.setItem(key, value)
        .then(() => resolve())
        .catch(error => reject(error));
    }) : null;
  },
};
