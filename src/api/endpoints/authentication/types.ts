export type LoginReqBody = {
    username: string;
    password: string;
}

export type LoginRes = {
    accessToken: string;
    refreshToken: string;
}

export type RefreshTokenReqBody = {
    refreshToken: string;
}

export type RefreshTokenRes = {
    accessToken: string;
}

export type LogoutReqBody = {
    refreshToken: string;
}


export type AuthenticationApi = {
    methods: {
        login: string;
        refreshToken: string;
        logout: string;
    };
    actions: {
        login: (credentials: LoginReqBody) => Promise<LoginRes>;
        refreshToken: (tokenInfo: RefreshTokenReqBody) => Promise<RefreshTokenRes>;
        logout: (tokenInfo: RefreshTokenReqBody) => Promise<void>
    }
}
