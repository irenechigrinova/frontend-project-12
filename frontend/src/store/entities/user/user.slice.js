import { createSlice } from '@reduxjs/toolkit';
import { login } from './user.thunk';
import { API_STATUS } from '../../../utils/constants';

const initialState = {
  loadingStatus: API_STATUS.idle,
  error: null,
  data: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.error = null;
      state.loadingStatus = API_STATUS.pending;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loadingStatus = API_STATUS.succeeded;
      localStorage.setItem('user', JSON.stringify(action.payload));
    });
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.loadingStatus = API_STATUS.pending;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error;
      state.loadingStatus = API_STATUS.failed;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
