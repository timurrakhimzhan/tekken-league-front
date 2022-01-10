import axiosInstance from "../../axios";
import methods from "./methods";
import {ChangeChallengeStatusBody, CreateChallengeBody, GetChallengeRes, GetChallengesRes} from "./types";

export default {
	createChallenge: (data: CreateChallengeBody): Promise<void> => {
		return axiosInstance.post(methods.createChallenge, data).then((res) => res.data);
	},
	getChallenges: (): Promise<GetChallengesRes> => {
		return axiosInstance.get(methods.getChallenges).then((res) => res.data);
	},
	getChallenge: (id: number): Promise<GetChallengeRes> => {
		return axiosInstance.get(methods.getChallenge(id)).then((res) => res.data);
	},
	changeChallengeStatus: (id: number, changeInfo: ChangeChallengeStatusBody): Promise<void> => {
		return axiosInstance.patch(methods.changeChallengeStatus(id), changeInfo).then((res) => res.data);
	}
}