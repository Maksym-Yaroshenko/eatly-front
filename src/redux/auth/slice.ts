import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

interface AuthState {
  user: null | { id: string; email: string };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, () => {})
      .addCase(register.fulfilled, () => {})
      .addCase(register.rejected, () => {})
      .addCase(login.pending, () => {})
      .addCase(login.fulfilled, () => {})
      .addCase(login.rejected, () => {})
      .addCase(logout.pending, () => {})
      .addCase(logout.fulfilled, () => {})
      .addCase(logout.rejected, () => {});
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
