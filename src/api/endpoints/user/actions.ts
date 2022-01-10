import {
    RegistrationReqBody,
    GetProfileInfoRes,
    GetUsersReqParams,
    GetUsersRes,
    EditProfileReqBody,
    ChangePasswordReqBody
} from "./types";
import methods from "./methods";
import axiosInstance from "../../axios";

export default {
    register: (data: RegistrationReqBody): Promise<void> => {
        return axiosInstance.post(methods.register, data).then((res) => res.data);
    },
    getProfile: (username: string): Promise<GetProfileInfoRes> => {
        return axiosInstance.get(methods.getProfile(username)).then((res) => res.data);
    },
    getUsers: (params: GetUsersReqParams = {}): Promise<GetUsersRes> => {
        return axiosInstance.get(methods.getUsers, {params}).then((res) => res.data);
    },
    getTop10: () => {
        return axiosInstance.get(methods.getTop10).then((res) => res.data);
    },
    editProfile: (info: EditProfileReqBody) => {
        return axiosInstance.put(methods.editProfile, info).then((res) => res.data);
    },
    changePassword: (info: ChangePasswordReqBody) => {
        return axiosInstance.patch(methods.changePassword, info).then((res) => res.data);
    }
}