import {GetUsersReqParams, GetUsersRes} from "../../api/endpoints/user/types";
import {proxy, useSnapshot} from "valtio";
import {useQuery, UseQueryOptions} from "react-query";
import {API_PLAYERS} from "../../constants";
import API from "../../api";

const queryParams: GetUsersReqParams = proxy({
	perPage: 100
});

export const useSearchPlayers = (config?: UseQueryOptions<GetUsersRes>) => {
	const {username, character} = useSnapshot(queryParams);
	const returning = useQuery<GetUsersRes>([API_PLAYERS, {username, character}], () => API.user.actions.getUsers(queryParams), config);
	const handleChangeQueryParams = (val: GetUsersReqParams) => {
		queryParams.username = val.username;
		queryParams.character = val.character
	}
	return {...returning, handleChangeQueryParams}
}