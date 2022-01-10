import {GetMatchesByUsernameRes} from "../../../../api/endpoints/match/types";

export type MatchCardProps = {
	match: GetMatchesByUsernameRes["items"][0]
	onClick: () => void;
}
