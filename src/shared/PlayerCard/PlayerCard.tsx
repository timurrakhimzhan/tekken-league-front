import React from "react"
import Avatar from "../Avatar"
import Typography from "../Typography"
import { PlayerCardWrapperStyled, InfoWrapperStyled, IconsWrapperStyled } from "./styled"
import {RiSteamFill} from "react-icons/ri";
import {GiBroadsword} from "react-icons/gi";
import {PlayerCardProps} from "./PlayerCard.props";

const PlayerCard: React.FC<PlayerCardProps> = (props) => {
    return <PlayerCardWrapperStyled onClick={props.onClick}>
        <Avatar title={`${props.username} ${props.character} avatar`}
                character={props.character}
                alt={`${props.username} ${props.character} avatar`} size={'sm'}/>
        <InfoWrapperStyled className={'marginLeftLg'}>
            <Typography size={'sm'}>
                {props.username} (#{props.rank})
            </Typography>
            <Typography  className={'marginBottomSm'} weight={'thin'} color={'warning'} size={'sm'}>
                Rating: {props.rating}
            </Typography>
            <IconsWrapperStyled>
                <RiSteamFill className={'marginRightSm'} onClick={() => window.open(props.steamUrl, '_blank')}/>
                {!props.isMine && <GiBroadsword onClick={props.onChallenge} />}
            </IconsWrapperStyled>
        </InfoWrapperStyled>
    </PlayerCardWrapperStyled>
}

export default PlayerCard;