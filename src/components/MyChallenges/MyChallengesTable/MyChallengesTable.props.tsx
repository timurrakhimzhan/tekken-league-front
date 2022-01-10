import {MY_CHALLENGES_HIDE_COLUMNS} from "../../../constants";

export type MyChallengesTableProps = {
	columnsToHide?: Array<keyof typeof MY_CHALLENGES_HIDE_COLUMNS>;
}