import {
    ChangeScoreConfirmationReqBody,
    DeclineMatchReqBody,
    GetMatchByIdRes,
    GetMatchesByUsernameRes,
    SubmitScoreReqBody
} from "./types";
import methods from "./methods";
import axiosInstance from "../../axios";

export default {
    getMatchesByUsername: (username: string): Promise<GetMatchesByUsernameRes> => {
        return axiosInstance.get(methods.getMatchesByUsername(username)).then((res) => res.data);
    },
    getMatchById: (id: number): Promise<GetMatchByIdRes> => {
        return axiosInstance.get(methods.getMatchById(id)).then((res) => res.data);
    },
    declineMatch: (id: number, data: DeclineMatchReqBody): Promise<void> => {
        return axiosInstance.patch(methods.declineMatch(id), data).then((res) => res.data);
    },
    submitScore: (id: number, data: SubmitScoreReqBody): Promise<void> => {
        return axiosInstance.patch(methods.submitScore(id), data).then((res) => res.data);
    },
    changeScoreConfirmation: (id: number, data: ChangeScoreConfirmationReqBody): Promise<void> => {
        return axiosInstance.patch(methods.changeScoreConfirmation(id), data).then((res) => res.data);
    },
}