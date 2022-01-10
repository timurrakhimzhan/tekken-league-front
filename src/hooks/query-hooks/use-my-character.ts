import useMyProfile from "./use-my-profile";
import useCharacters from "./use-characters";
import {useMemo} from "react";

const useMyCharacter = () => {
	const {data: profileInfo} = useMyProfile();
	const {data: characters } = useCharacters();
	return useMemo(() => {
		if (profileInfo?.character && characters) {
			return characters.items.find(({codename}) => codename === profileInfo.character) || null;
		}
		return null;
	}, [profileInfo, characters]);
}

export default useMyCharacter;