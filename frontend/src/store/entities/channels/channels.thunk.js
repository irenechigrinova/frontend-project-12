import { createAsyncThunk } from '@reduxjs/toolkit';
import { getChannelsApi } from '../../../api/channels';

export const fetchChannels = createAsyncThunk(
  'channels/fetchAll',
  getChannelsApi,
);
