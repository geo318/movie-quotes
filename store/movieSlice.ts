import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'types';

const initialMovieState = {
  movies: [] as Movie[],
  query: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialMovieState,
  reducers: {
    addMovie(state, action: { payload: Movie }) {
      state.movies.unshift(action.payload);
    },
    resetMovies(state) {
      state.movies = [];
    },
    setQuery(state, action: { payload: string }) {
      state.query = action.payload;
    },
    updateMovies(state, action) {
      let movies = state.movies;
      if (movies?.some((e: Movie) => e.id === action.payload?.[0].id)) return;
      if (movies?.length > 1) {
        state.movies = [...movies, ...action?.payload];
        return;
      }
      state.movies = action.payload;
    },
    filterMovies(state, action) {
      state.movies = action.payload;
    },
    deleteMovie(state, action: { payload: number }) {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
