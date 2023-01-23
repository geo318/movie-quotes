import { createSlice } from '@reduxjs/toolkit';
import { InitialError } from 'types';

const initialErrorState: InitialError = {
  flashError: [] as string[],
};

const fleshErrorSlice = createSlice({
  name: 'fleshErrors',
  initialState: initialErrorState,
  reducers: {
    setFleshError(state, action) {
      state.flashError = [action.payload, ...state.flashError];
    },

    clearFleshError(state) {
      state.flashError = [];
    },
  },
});

export const fleshActions = fleshErrorSlice.actions;

export default fleshErrorSlice.reducer;
