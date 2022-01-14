export type LoginReqBody = {
  username: string;
  password: string;
};

export type LoginRes = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshTokenReqBody = {
  refreshToken: string;
};

export type RefreshTokenRes = {
  accessToken: string;
};

export type LogoutReqBody = {
  refreshToken: string;
};

export type ForgotPasswordReqBody = {
  username: string;
};
export type ResetPasswordReqBody = {
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
};

export type AuthenticationApi = {
  methods: {
    login: string;
    refreshToken: string;
    logout: string;
    forgotPassword: string;
    resetPassword: string;
  };
  actions: {
    login: (credentials: LoginReqBody) => Promise<LoginRes>;
    refreshToken: (tokenInfo: RefreshTokenReqBody) => Promise<RefreshTokenRes>;
    logout: (tokenInfo: RefreshTokenReqBody) => Promise<void>;
    forgotPassword: (credentials: ForgotPasswordReqBody) => Promise<void>;
    resetPassword: (credentials: ResetPasswordReqBody) => Promise<void>;
  };
};
