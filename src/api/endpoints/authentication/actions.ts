import {
  ForgotPasswordReqBody,
  LoginReqBody,
  LoginRes,
  LogoutReqBody,
  RefreshTokenReqBody,
  RefreshTokenRes,
  ResetPasswordReqBody,
} from "./types";
import methods from "./methods";
import axiosInstance from "../../axios";

export default {
  login: (credentials: LoginReqBody): Promise<LoginRes> => {
    return axiosInstance
      .post(methods.login, credentials)
      .then((res) => res.data);
  },
  refreshToken: (
    credentials: RefreshTokenReqBody
  ): Promise<RefreshTokenRes> => {
    return axiosInstance
      .post(methods.refreshToken, credentials)
      .then((res) => res.data);
  },
  logout: (credentials: LogoutReqBody): Promise<void> => {
    return axiosInstance
      .post(methods.logout, credentials)
      .then((res) => res.data);
  },
  forgotPassword: (credentials: ForgotPasswordReqBody): Promise<void> => {
    return axiosInstance
      .post(methods.forgotPassword, credentials)
      .then((res) => res.data);
  },
  resetPassword: (credentials: ResetPasswordReqBody): Promise<void> => {
    return axiosInstance
      .post(methods.resetPassword, credentials)
      .then((res) => res.data);
  },
};
