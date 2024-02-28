import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseAPI } from './api';

const reducer = combineReducers({
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
