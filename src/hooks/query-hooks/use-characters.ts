import {useQuery, UseQueryOptions} from "react-query";
import {GetCharactersRes} from "../../api/endpoints/dictionary/types";
import {API_DICTIONARY_CHARACTERS} from "../../constants";
import API from "../../api";

const useCharacters = (config?: UseQueryOptions<GetCharactersRes>) => {
	return useQuery(API_DICTIONARY_CHARACTERS, async () => {
		return API.dictionary.actions.getCharacters()
	}, config)
}

export default useCharacters;