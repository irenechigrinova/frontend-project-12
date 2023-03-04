import axios from 'axios';

// eslint-disable-next-line functional/no-let
let store;

const injectStore = (_store) => {
  store = _store;
};

const $api = axios.create({
  baseURL: '/api/v1',
});

$api.interceptors.request.use(
  (config) => {
    const { user } = store.getState();
    console.log(user);
    if (config.headers && user && user.data) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${user.data.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { $api, injectStore };
