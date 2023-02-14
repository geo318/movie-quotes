import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import feedReducer from './feedSlice';
import noteReducer from './noteSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    note: noteReducer,
    movie: movieReducer,
  },
});
