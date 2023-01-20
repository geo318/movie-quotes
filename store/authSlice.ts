import { createSlice } from '@reduxjs/toolkit';
import { localStore } from 'helpers';

import { InitialAuthState, User } from 'types';

const auth: boolean = localStore.get('isAuth');
const user: User = localStore.get('userInfo');

const initialAuthState: InitialAuthState = {
  isAuthenticated: auth,
  formErrors: false,
  loginErrors: false,
  user: user,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStore.set('isAuth', true);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStore.set('isAuth', false);
    },
    setUser(state, action) {
      state.user = action.payload;
      localStore.set('userInfo', { user: action.payload });
    },
    setFormError(state, action) {
      state.formErrors = action.payload;
    },
    clearFormError(state) {
      state.formErrors = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
