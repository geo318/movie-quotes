import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
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
    openRegister(state) {
      state.isRegisterModalOpen = true;
      state.isLoginModalOpen = false;
    },
    openLogin(state) {
      state.isLoginModalOpen = true;
      state.isRegisterModalOpen = false;
    },
    toggleRegister(state) {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
    toggleLogin(state) {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
