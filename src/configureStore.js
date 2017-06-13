import { createStore } from 'redux';

const configureStore = () => {
  const persistedState = {
      dataReducer: [{}],
    };
  store = createStore(siteApp, persistedState);

  return store;
};

export default configureStore;
