export interface PostAuthRequest {
  email: string;
  password: string;
}

export interface PostSigninResponse {
  access_token: string;
}

export const credentialValue = {
  email: '',
  password: '',
};

export type CredentialType = typeof credentialValue;
