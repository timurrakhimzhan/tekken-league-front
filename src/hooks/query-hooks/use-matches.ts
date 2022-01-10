import {useQuery, UseQueryOptions} from "react-query";
import {GetMatchesByUsernameRes} from "../../api/endpoints/match/types";
import {API_MATCH_HISTORY} from "../../constants";
import API from "../../api";
import {useParams} from "react-router-dom";

const useMatches = (config?: UseQueryOptions<GetMatchesByUsernameRes>) => {
	const {username} = useParams<{username: string}>();
	return useQuery([API_MATCH_HISTORY, username], () => API.match.actions.getMatchesByUsername(username), config);
}

export default useMatches;