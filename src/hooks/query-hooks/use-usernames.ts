import {useQuery, UseQueryOptions} from "react-query";
import {GetUsersRes} from "../../api/endpoints/user/types";
import {GetUsernamesRes} from "../../api/endpoints/dictionary/types";
import {API_DICTIONARY_USERNAMES} from "../../constants";
import API from "../../api";

const useUsernames = (config?: UseQueryOptions<GetUsernamesRes>) => {
	return useQuery(API_DICTIONARY_USERNAMES, async () => {
		return API.dictionary.actions.getUsernames()
	}, config);
}

export default useUsernames;