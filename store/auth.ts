import { createSlice } from '@reduxjs/toolkit';
import { InitialAuthState } from './types';

const initialAuthState: InitialAuthState = {
  isAuthenticated: false,
  registerErrors: false,
  loginErrors: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setRegisterError(state, action) {
      state.registerErrors = action.payload;
    },
    setLoginError(state, action) {
      state.loginErrors = action.payload;
    },
    clearRegisterError(state) {
      state.registerErrors = false;
    },
    clearLoginError(state) {
      state.loginErrors = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
