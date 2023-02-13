import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import feedReducer from './feedSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: { auth: authReducer, feed: feedReducer, note: noteReducer },
});
