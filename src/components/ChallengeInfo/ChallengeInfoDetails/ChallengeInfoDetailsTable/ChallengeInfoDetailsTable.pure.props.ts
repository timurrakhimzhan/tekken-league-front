import {GetChallengeRes} from "../../../../api/endpoints/challenge/types";

export type ChallengeInfoDetailsTablePureProps = {
	challengeInfo: GetChallengeRes,
	username: string;
	onPlayerClick: (username: string) => void;
	onMatchClick: (id: number) => void;
}