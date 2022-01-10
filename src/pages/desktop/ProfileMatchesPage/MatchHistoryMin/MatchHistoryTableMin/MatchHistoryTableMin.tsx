import React, {useMemo} from "react";
import MatchHistoryTable from "../../../../../components/MatchHistory/MatchHistoryTable";
import {MATCH_HISTORY_HIDE_COLUMNS} from "../../../../../constants";
import {useDesktopInfo} from "../../../../../hooks/use-media-query";

const MatchHistoryTableMin: React.FC = () => {
    const {isBigDesktop} = useDesktopInfo();
    let columnsToHide: Array<keyof typeof MATCH_HISTORY_HIDE_COLUMNS> = useMemo(() => {
        if(!isBigDesktop) {
            return [MATCH_HISTORY_HIDE_COLUMNS.DELTA, MATCH_HISTORY_HIDE_COLUMNS.FIRST_TO, MATCH_HISTORY_HIDE_COLUMNS.CATEGORY]
        }
        return [MATCH_HISTORY_HIDE_COLUMNS.DELTA, MATCH_HISTORY_HIDE_COLUMNS.FIRST_TO,
            MATCH_HISTORY_HIDE_COLUMNS.CATEGORY, MATCH_HISTORY_HIDE_COLUMNS.SCORE]
    }, [isBigDesktop]);

    return <MatchHistoryTable columnsToHide={columnsToHide} />
}

export default MatchHistoryTableMin;