import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './entities/user/user.slice';
import channelsReducer from './entities/channels/channels.slice';

const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
