import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "../../types";
import ChallengePage from "./ChallengePage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import HomePage from "./HomePage";
import ProfileMatchesPage from "./ProfileMatchesPage";
import ProfilePage from "./ProfilePage";
import ResetPasswordPage from "./ResetPasswordPage";

const ROUTES: Array<Route> = [
  {
    key: "home",
    label: "Home",
    path: "/",
    authRequired: false,
    unAuthRequired: false,
    Component: HomePage,
    exact: true,
  },
  {
    key: "auth",
    label: "Auth",
    path: "/auth",
    authRequired: false,
    unAuthRequired: true,
    redirectTo: "/",
    Component: () => <Redirect to={"/"} />,
    exact: true,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/profile/:username",
    authRequired: true,
    unAuthRequired: false,
    redirectTo: "/",
    Component: ProfilePage,
    exact: true,
  },
  {
    key: "matches",
    label: "Profile/Matches",
    path: "/matches/:username",
    authRequired: true,
    unAuthRequired: false,
    Component: ProfileMatchesPage,
    redirectTo: "/",
    exact: false,
  },
  {
    key: "challenge",
    label: "My challenges",
    path: "/challenges",
    authRequired: true,
    unAuthRequired: false,
    Component: ChallengePage,
    redirectTo: "/",
    exact: false,
  },
  {
    key: "forgotPassword",
    label: "Forgot Password",
    path: "/forgot",
    authRequired: false,
    unAuthRequired: true,
    Component: ForgotPasswordPage,
    redirectTo: "/",
    exact: true,
  },
  {
    key: "resetPassword",
    label: "Reset Password",
    path: "/forgot/:resetToken",
    authRequired: false,
    unAuthRequired: true,
    Component: ResetPasswordPage,
    redirectTo: "/",
    exact: true,
  },
];

export default ROUTES;
