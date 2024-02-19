import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  password: string;
  image?: string | null;
  role?: string | null;
}
interface AuthState {
  loading: boolean;
  token?: string;
  isAuth: boolean;
  user?: User;
  error?: any;
}

const initialState: AuthState = {
  loading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
        state.isAuth = true;
        state.loading = false;
      });
  },
});

export const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }) => {
    try {
      const response = await axios.post('/api/auth/login', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: User) => {
    try {
      const response = await axios.post('/api/auth/register', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export default authSlice.reducer;
