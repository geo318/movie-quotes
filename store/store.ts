import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import feedReducer from './feedSlice';
import noteReducer from './noteSlice';
import movieReducer from './movieSlice';
import quoteReducer from './quoteSlice';
import flashReducer from './flashSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    note: noteReducer,
    movie: movieReducer,
    quote: quoteReducer,
    flash: flashReducer,
    profile: profileReducer,
  },
});
