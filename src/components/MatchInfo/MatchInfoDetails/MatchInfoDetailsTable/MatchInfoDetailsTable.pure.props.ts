import {GetMatchByIdRes} from "../../../../api/endpoints/match/types";

export type MatchInfoDetailsTablePureProps = {
	match: GetMatchByIdRes;
	onPlayerClick: (username: string) => void;
	onChallengeClick: (challengeId: number) => void;
}