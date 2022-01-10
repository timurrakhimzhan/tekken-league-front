import React from "react"
import {SearchPlayerContainerStyled, SearchPlayerWrapperStyled} from "./styled"
import SearchPlayerForm from "./SearchPlayerForm/SearchPlayerForm";
import Typography from "../../shared/Typography";
import PlayerList from "./PlayerList";
import {SearchPlayerProps} from "./SearchPlayer.props";

const SearchPlayer: React.FC<SearchPlayerProps> = (props) => {
    return <SearchPlayerContainerStyled direction={'column'} {...props}>
        <Typography className={'marginBottomLg marginLeftAuto marginRightAuto'} color={'primary'} size={'xLg'} weight={'bold'}>
            Search Player
        </Typography>
        <SearchPlayerWrapperStyled>
            <SearchPlayerForm className={'marginBottomLg'} />
            <PlayerList />
        </SearchPlayerWrapperStyled>
    </SearchPlayerContainerStyled>
}

export default SearchPlayer;