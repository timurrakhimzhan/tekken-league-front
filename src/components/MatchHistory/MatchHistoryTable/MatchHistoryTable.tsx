import React from "react";
import Spinner from "../../../shared/Spinner";
import MatchHistoryTablePure from "./MatchHistoryTable.pure";
import {useHistory, useParams} from "react-router-dom";
import useMatches from "../../../hooks/query-hooks/use-matches";
import {MatchHistoryTableProps} from "./MatchHistoryTable.props";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const MatchHistoryTable: React.FC<MatchHistoryTableProps> = ({columnsToHide}) => {
    const {username} = useParams<{username: string}>();
    const {data: matchHistory, isLoading: isLoadingMatchHistory} = useMatches();
    const {handleProfileOpen, handleMatchOpen} = useNavigationHandlers();
    if(!matchHistory || isLoadingMatchHistory) {
        return <Spinner color={'primary'} size={'md'} />
    }
    return <MatchHistoryTablePure onPlayerClick={(username) => handleProfileOpen(username)}
                                  onMatchClick={(id) => handleMatchOpen(username, id)}
                                  items={matchHistory.items}
                                  username={username}
                                  columnsToHide={columnsToHide || []}
    />
}

export default MatchHistoryTable;