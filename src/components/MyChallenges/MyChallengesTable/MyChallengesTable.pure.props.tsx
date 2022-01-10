import {GetChallengesRes} from "../../../api/endpoints/challenge/types";
import {MY_CHALLENGES_HIDE_COLUMNS} from "../../../constants";

export type MyChallengesTablePureProps = {
	items: GetChallengesRes["items"],
	onPlayerClick: (username: string) => void;
	onChallengeClick: (challengeId: number) => void;
	columnsToHide: Array<keyof typeof MY_CHALLENGES_HIDE_COLUMNS>;
}