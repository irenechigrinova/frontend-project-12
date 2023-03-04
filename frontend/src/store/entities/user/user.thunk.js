import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../../api/auth';

const thunk = async (credentials) => loginApi(credentials);

export const login = createAsyncThunk('user/login', thunk);
