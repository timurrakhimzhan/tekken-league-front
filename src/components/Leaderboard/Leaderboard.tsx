import React from "react";
import { LeaderboardContainerStyled } from "./styled";
import LeaderboardTable from "./LeaderboardTable";
import Typography from "../../shared/Typography";
import {LeaderboardProps} from "./Leaderboard.props";

const Leaderboard: React.FC<LeaderboardProps> = (props) => {
    return <LeaderboardContainerStyled direction={'column'} {...props}>
        <Typography className={'marginBottomLg marginLeftAuto marginRightAuto'} color={'primary'} size={'xLg'} weight={'bold'}>
            Top 10 Leaderboard
        </Typography>
        <LeaderboardTable />
    </LeaderboardContainerStyled>
}

export default Leaderboard;