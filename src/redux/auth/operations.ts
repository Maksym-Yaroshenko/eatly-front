import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://api.example.com';

interface AuthResponse {
  user: { id: string; email: string };
  accessToken: string;
}

interface Credentials {
  email: string;
  password: string;
}

export const register = createAsyncThunk<
  AuthResponse,
  Credentials,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthResponse>('/register', credentials);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Registration failed');
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  Credentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthResponse>('/login', credentials);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Login failed');
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/logout');
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Logout failed');
    }
  }
);
