import React from "react";
import MatchHistoryTable from "./MatchHistoryTable/MatchHistoryTable";
import { MatchHistoryContainerStyled } from "./styled";
import Typography from "../../shared/Typography";
import {MatchHistoryProps} from "./MatchHistory.props";
import {useDeviceInfo} from "../../hooks/use-media-query";
import MatchHistoryList from "./MatchHistoryList";

const MatchHistory: React.FC<MatchHistoryProps> = (props) => {
    const {isDesktop} = useDeviceInfo();
    return <MatchHistoryContainerStyled direction={'column'} align={'center'} justify={'flexStart'} {...props} desktop={isDesktop}>
        <Typography className={'marginBottomLg marginLeftAuto marginRightAuto'} color={'primary'} size={'xLg'} weight={'bold'}>
            Match History
        </Typography>
        {isDesktop ? <MatchHistoryTable /> : <MatchHistoryList />}
    </MatchHistoryContainerStyled>

}

export default MatchHistory;