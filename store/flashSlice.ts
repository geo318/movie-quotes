import { createSlice } from '@reduxjs/toolkit';

const initialFlashState = {
  flash: '',
  isLoading: false,
};

const flashSlice = createSlice({
  name: 'flashSlice',
  initialState: initialFlashState,
  reducers: {
    setFlashMessage(state, action) {
      state.flash = action.payload;
    },
    setFlashError(state, action) {
      state.flash = action.payload;
    },
    clearFlashError(state) {
      state.flash = '';
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const flashActions = flashSlice.actions;

export default flashSlice.reducer;
