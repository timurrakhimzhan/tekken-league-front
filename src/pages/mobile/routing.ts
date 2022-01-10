import HomePage from "./HomePage";
import AuthPage from "./AuthPage";
import ChallengePage from "./ChallengePage";
import {Route} from "../../types";
import SearchPlayerPage from "./SearchPlayers";
import ProfilePage from "./ProfilePage";
import MatchesPage from "./MatchesPage";

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
        label: 'Profile',
        path: '/profile/:username',
        authRequired: true,
        unAuthRequired: false,
        redirectTo: "/",
        Component: ProfilePage,
        exact: false
    },
    {
        key: 'matches',
        label: 'Matches',
        path: '/matches/:username',
        authRequired: true,
        unAuthRequired: false,
        redirectTo: "/",
        Component: MatchesPage,
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