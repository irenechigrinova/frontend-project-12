import { $api } from './index';

export const loginApi = (data) => $api.post('/login', data);
