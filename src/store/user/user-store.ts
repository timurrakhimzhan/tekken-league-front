import BaseStore from "../base-store";
import {LoginRes} from "../../api/endpoints/authentication/types";
import API from "../../api";

export default class UserStore extends BaseStore {
    private _username: string | null = null;
    private _accessToken: string | null = null;
    private _refreshToken: string | null = null;
    private _isLoggedIn: boolean = false;

    constructor() {
        super();
    }

    get username() {
        return this._username;
    }

    get accessToken() {
        return this._accessToken;
    }

    get refreshToken() {
        return this._refreshToken;
    }

    get isLoggedIn() {
        return this._isLoggedIn;
    }

    setCredentials(username: string, {accessToken, refreshToken}: LoginRes) {
        this._username = username;
        this._accessToken = accessToken;
        this._refreshToken = refreshToken;
        this._isLoggedIn = true;
    }

    removeCredentials() {
        this._username = null;
        this._accessToken = null;
        this._refreshToken = null;
        this._isLoggedIn = false;
    }

    refreshAccessToken(token: string) {
        this._accessToken = token;
    }

    async logout() {
        if(!this.refreshToken) {
            return;
        }
        await API.authentication.actions.logout({refreshToken: this.refreshToken});
        this.removeCredentials();
    }
}