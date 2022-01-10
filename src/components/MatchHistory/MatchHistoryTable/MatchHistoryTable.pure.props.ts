import {GetMatchesByUsernameRes} from "../../../api/endpoints/match/types";
import {MATCH_HISTORY_HIDE_COLUMNS} from "../../../constants";

export type MatchHistoryTablePureProps = {
	items: GetMatchesByUsernameRes["items"];
	username: string;
	onPlayerClick: (username: string) => void;
	onMatchClick: (matchId: number) => void;
	columnsToHide: Array<keyof typeof MATCH_HISTORY_HIDE_COLUMNS>;
};