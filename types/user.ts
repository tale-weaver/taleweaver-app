export type User = {
  name: string;
  email: string;
  password: string;
  role: string;
  age: number;
};

export type UserSignup = {
  username: string;
  email: string;
  password: string;
  source: string;
  avatar: string;
};

export type UserVerify = {
  username: string;
  token: string;
};

export type UserResend = {
  username: string;
};
