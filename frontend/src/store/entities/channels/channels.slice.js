import { createSlice } from '@reduxjs/toolkit';
import { API_STATUS } from '../../../utils/constants';
import { fetchChannels } from './channels.thunk';

const initialState = {
  loadingStatus: API_STATUS.idle,
  error: null,
  list: [],
  messages: {},
  currentChannel: {
    id: null,
    name: '',
  },
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    changeCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChannels.fulfilled, (state, action) => {
      const { channels, currentChannelId, messages } = action.payload;
      state.list = channels;
      state.currentChannel = {
        id: currentChannelId,
        name: channels.find((channel) => channel.id === currentChannelId).name,
      };
      state.messages = messages.reduce((acc, message) => {
        if (!acc[message.channelId]) {
          acc[message.channelId] = [];
        }
        acc[message.channelId].push(message);
        return acc;
      }, {});
      state.error = null;
      state.loadingStatus = API_STATUS.succeeded;
    });
    builder.addCase(fetchChannels.pending, (state) => {
      state.error = null;
      state.loadingStatus = API_STATUS.pending;
    });
    builder.addCase(fetchChannels.rejected, (state, action) => {
      state.error = action.error;
      state.loadingStatus = API_STATUS.failed;
    });
  },
});

export default channelsSlice.reducer;
export const { changeCurrentChannel } = channelsSlice.actions;
