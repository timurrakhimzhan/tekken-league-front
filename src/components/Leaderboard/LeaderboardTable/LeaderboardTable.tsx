import React, {useEffect} from "react";
import {LeaderboardTableProps} from "./LeaderboardTable.props";
import {useHistory} from "react-router-dom";
import LeaderboardTablePure from "./LeaderboardTable.pure";
import {useQuery} from "react-query";
import {API_LEADERBOARD} from "../../../constants";
import API from "../../../api";
import Spinner from "../../../shared/Spinner";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const LeaderboardTable: React.FC<LeaderboardTableProps> = () => {
    const {handleProfileOpen} = useNavigationHandlers();
    const {data: top10, isLoading} = useQuery(API_LEADERBOARD, API.user.actions.getTop10, {
        initialData: null,
    });
    if(!top10 || isLoading) {
        return <Spinner color={'primary'} size={'md'} />
    }
    return <LeaderboardTablePure items={top10.items} onPlayerClick={handleProfileOpen} />
}

export default LeaderboardTable;