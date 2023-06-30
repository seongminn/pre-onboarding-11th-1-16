export interface PostAuthRequest {
  email: string;
  password: string;
}

export interface PostSigninResponse {
  access_token: string;
}
