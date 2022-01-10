import {useQuery, UseQueryOptions} from "react-query";
import {GetProfileInfoRes} from "../../api/endpoints/user/types";
import {GetMatchByIdRes} from "../../api/endpoints/match/types";
import {API_GET_MATCH} from "../../constants";
import API from "../../api";
import {useParams} from "react-router-dom";

const useCurrentMatch = (config?: UseQueryOptions<GetMatchByIdRes>) => {
	const {id} = useParams<{id: string}>();
	return useQuery([API_GET_MATCH, id], () => API.match.actions.getMatchById(parseInt(id)), config);
}

export default useCurrentMatch;