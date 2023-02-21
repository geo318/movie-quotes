import { createSlice } from '@reduxjs/toolkit';
import { ProfileSubmitProps } from 'types';

const initialProfileState: {
  activeInput: ProfileSubmitProps[];
  active: boolean;
} = {
  activeInput: [],
  active: false,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: initialProfileState,
  reducers: {
    editInput(state, action: { payload: ProfileSubmitProps }) {
      state.activeInput.push(action.payload);
    },
    clearForm(state) {
      state.activeInput = [];
    },
    setFormActive(state) {
      state.active = true;
    },
    setFormPassive(state) {
      state.active = false;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
