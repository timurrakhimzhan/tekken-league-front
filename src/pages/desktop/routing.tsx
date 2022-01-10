import HomePage from "./HomePage";
import ProfileMatchesPage from "./ProfileMatchesPage";
import React from "react";
import ChallengePage from "./ChallengePage";
import {Route} from "../../types";
import {Redirect} from "react-router-dom";
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
        label: 'Auth',
        path: '/auth',
        authRequired: false,
        unAuthRequired: true,
        redirectTo: "/",
        Component: () => <Redirect to={"/"} />,
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
        Component: ProfileMatchesPage,
        redirectTo: "/",
        exact: false
    },
    {
        key: 'challenge',
        label: 'My challenges',
        path: '/challenges',
        authRequired: true,
        unAuthRequired: false,
        Component: ChallengePage,
        redirectTo: "/",
        exact: false
    }
]

export default ROUTES;