import HomePage from "./HomePage";
import AuthPage from "./AuthPage";
import ProfileMatchesPage from "./ProfileMatchesPage";
import ChallengePage from "./ChallengePage";
import {Route} from "../../types";
import SearchPlayerPage from "./SearchPlayers";
import {Redirect} from "react-router-dom";
import React from "react";
import ProfilePage from "./ProfilePage";

const ROUTES: Array<Route> = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        authRequired: false,
        unAuthRequired: false,
        Component: HomePage,
        exact: true
    },
    {
        key: 'auth',
        label: "Authorize",
        path: '/auth',
        authRequired: false,
        unAuthRequired: true,
        redirectTo: "/",
        Component: AuthPage,
        exact: true
    },
    {
        key: 'profile',
        label: "Profile",
        path: '/profile/:username',
        authRequired: true,
        unAuthRequired: false,
        redirectTo: "/",
        Component: ProfilePage,
        exact: true
    },
    {
        key: 'matches',
        label: 'Profile/Matches',
        path: '/matches/:username',
        authRequired: true,
        unAuthRequired: false,
        redirectTo: "/",
        Component: ProfileMatchesPage,
        exact: false
    },
    {
        key: 'challenge',
        label: 'My challenges',
        path: '/challenges',
        authRequired: true,
        unAuthRequired: false,
        redirectTo: "/",
        Component: ChallengePage,
        exact: false
    }
]

export default ROUTES;