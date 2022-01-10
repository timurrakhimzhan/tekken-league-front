export type RegistrationReqBody = {
    username: string;
    password: string;
    confirmPassword: string;
    steamUrl: string;
    character: string;
}

export type GetProfileInfoRes = {
    character: string;
    username: string;
    rank: number;
    rating: number;
    wins: number;
    loses: number;
    steamUrl: string;
    otherInfo: string | null;
}

export type GetUsersRes = {
    count: number;
    items: Array<{
        username: string;
        steamUrl: string;
        character: string;
        rating: number;
        rank: number;
    }>
}

export type GetUsersReqParams = {
    username?: string;
    character?: string;
    perPage?: number;
    page?: number;
}

export type GetTop10Res = {
    count: number;
    items: Array<{
        username: string;
        rating: number;
        rank: number;
    }>
}

export type EditProfileReqBody = {
    steamUrl: string;
    character: string;
    otherInfo?: string;
}

export type ChangePasswordReqBody = {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export type UserApi = {
    methods: {
        register: string;
        getProfile: (username: string) => string;
        getUsers: string;
        getTop10: string;
        editProfile: string;
        changePassword: string;
    };
    actions: {
        register: (data: RegistrationReqBody) => Promise<void>;
        getProfile: (username: string) => Promise<GetProfileInfoRes>;
        getUsers: (params?: GetUsersReqParams) => Promise<GetUsersRes>;
        getTop10: () => Promise<GetTop10Res>;
        editProfile: (data: EditProfileReqBody) => Promise<void>;
        changePassword: (data: ChangePasswordReqBody) => Promise<void>;
    }
};
