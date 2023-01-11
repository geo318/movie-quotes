import { createSlice } from '@reduxjs/toolkit';
import { LocalDataObj, localStore } from 'helpers';
import { InitialAuthState } from './types';

const auth: boolean = localStore.get('isAuth');
const user: LocalDataObj = localStore.get('userInfo');

const initialAuthState: InitialAuthState = {
  isAuthenticated: auth,
  registerErrors: false,
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
