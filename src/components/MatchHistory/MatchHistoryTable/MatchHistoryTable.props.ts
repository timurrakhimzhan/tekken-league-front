import {MATCH_HISTORY_HIDE_COLUMNS} from "../../../constants";

export type MatchHistoryTableProps = {
	columnsToHide?: Array<keyof typeof MATCH_HISTORY_HIDE_COLUMNS>;
}