import { TOKEN_KEY } from '@/constants/auth';

import { instance } from './instance';

export const postSignin = async (body: any) => {
  return instance
    .post('/auth/signin', body)
    .then((res) => {
      localStorage.setItem(TOKEN_KEY, res.data.access_token);

      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const postSignup = async (body: any) => {
  await instance.post('/auth/signup', body);
};
