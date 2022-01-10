import {GetTop10Res} from "../../../api/endpoints/user/types";

export type LeaderboardTablePureProps = {
	items: GetTop10Res["items"];
	onPlayerClick: (username: string) => void;
}