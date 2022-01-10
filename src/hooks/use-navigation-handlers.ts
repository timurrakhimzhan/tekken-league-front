import {useHistory} from "react-router-dom";
import {useDeviceInfo} from "./use-media-query";

const useNavigationHandlers = () => {
	const history = useHistory();
	const {isDesktop, isMobile} = useDeviceInfo();
	const handleProfileOpen = (username: string) => {
		if(isMobile) {
			history.push(`/profile/${username}`);
			return;
		}
		history.push(`/matches/${username}`)
	}
	const handleMatchOpen = (username: string, id: number) => {
		history.push(`/matches/${username}/${id}`)
	}
	const handleMatchesOpen = (username: string) => {
		history.push(`/matches/${username}`)
	}
	const handleChallengeOpen = (id: number) => {
		history.push(`/challenges/${id}`)
	}
	const handleChallengesOpen = () => {
		history.push(`/challenges`)
	}
	const handleHomePageOpen = () => {
		history.push(`/`)
	}
	const handleAuthOpen = () => {
		if(isDesktop) {
			history.push(`/`)
			return;
		}
		history.push(`/auth`)
	}
	return {
		handleProfileOpen,
		handleMatchOpen,
		handleMatchesOpen,
		handleChallengeOpen,
		handleChallengesOpen,
		handleHomePageOpen,
		handleAuthOpen
	}
}

export default useNavigationHandlers;