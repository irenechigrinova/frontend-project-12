import { $api } from './index';

export const getChannelsApi = async () => {
  const response = await $api.get('/data');
  return response.data;
};
