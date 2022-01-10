import {useQuery, UseQueryOptions} from "react-query";
import {GetChallengesRes} from "../../api/endpoints/challenge/types";
import {API_GET_CHALLENGES} from "../../constants";
import API from "../../api";

const useMyChallenges = (config?: UseQueryOptions<GetChallengesRes>) => {
	return useQuery(API_GET_CHALLENGES, () => API.challenge.actions.getChallenges(), config);
}

export default useMyChallenges;