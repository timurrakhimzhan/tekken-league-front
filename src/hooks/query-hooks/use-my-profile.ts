import {useQuery, UseQueryOptions} from "react-query";
import {GetProfileInfoRes} from "../../api/endpoints/user/types";
import {API_PROFILE_INFO} from "../../constants";
import API from "../../api";
import {useSnapshot} from "valtio";
import store from "../../store";
import useAuth from "../use-auth";

const useMyProfile = (config?: UseQueryOptions<GetProfileInfoRes | null>) => {
	const {username} = useAuth();
	return useQuery<GetProfileInfoRes | null>([API_PROFILE_INFO, username], () => {
		if(username) {
			return API.user.actions.getProfile(username)
		}
		return null;
	}, config)
}

export default useMyProfile;