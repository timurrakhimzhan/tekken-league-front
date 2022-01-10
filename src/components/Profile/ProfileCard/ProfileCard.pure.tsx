import React from "react"
import Avatar from "../../../shared/Avatar"
import Typography from "../../../shared/Typography"
import {
    ButtonsWrapperStyled,
    IconStyled,
    ProfileCardWrapperStyled,
    WinLoseWrapperStyled
} from "./styled"
import {RiSteamFill} from "react-icons/ri";
import {GiBroadsword} from "react-icons/gi";
import Divider from "../../../shared/Divider";
import {ProfileCardPureProps} from "./ProfileCard.pure.props";
import {MdModeEdit} from "react-icons/all";
import UtilButton from "../../../shared/UtilButton";
import ChallengeIcon from "../../../shared/ChallengeIcon";

const ProfileCardPure: React.FC<ProfileCardPureProps> = (props) => {
    const {profileInfo} = props;
    return <ProfileCardWrapperStyled>
        <Avatar title={`${profileInfo.username} ${profileInfo.character} avatar`} alt={`${profileInfo.username} ${profileInfo.character} avatar`} className={'marginBottomMd'} character={profileInfo.character} />
        <Typography size={'xLg'} className={'marginBottom6'}>
            {profileInfo.username} (#{profileInfo.rank})
        </Typography>
        <Typography size={'md'} className={'marginBottom6'} color={'warning'} weight={'thin'}>
            Rating: {profileInfo.rating}
        </Typography>
        <WinLoseWrapperStyled>
            <Typography size={'sm'} className={'marginRightMd'} color={'success'}>
                Wins: {profileInfo.wins}
            </Typography>
            <Typography size={'sm'} color={'error'}>
                Loses: {profileInfo.loses}
            </Typography>
        </WinLoseWrapperStyled>
        <ButtonsWrapperStyled className={'marginTopSm'}>
            <UtilButton onClick={() => window.open(profileInfo.steamUrl, '_blank')}>
                <RiSteamFill className={'marginRightXSm'}/>
                <Typography clickable size={'sm'} weight={'regular'}>
                    steam
                </Typography>
            </UtilButton>
            {
                props.isMine ?
                    <UtilButton onClick={props.onEdit}>
                        <MdModeEdit />
                        <Typography clickable size={'sm'} weight={'regular'}>
                            edit
                        </Typography>
                    </UtilButton>
                    :
                    <UtilButton onClick={() => props.onFight && props.onFight(profileInfo.username)}>
                        <IconStyled>
                            <ChallengeIcon />
                        </IconStyled>
                        <Typography clickable size={'sm'} weight={'regular'}>
                            fight
                        </Typography>
                    </UtilButton>
            }
            {
                props.onMatches && (
                  <UtilButton onClick={() => props.onMatches && props.onMatches(profileInfo.username)}>
                      <GiBroadsword/>
                      <Typography clickable size={'sm'} weight={'regular'}>
                          matches
                      </Typography>
                  </UtilButton>
                )
            }
        </ButtonsWrapperStyled>


        <Divider className={'marginBottomMd marginTopMd'} />
        <Typography weight={'thin'} size={'sm'}>
            {profileInfo.otherInfo || "No info provided"}
        </Typography>
    </ProfileCardWrapperStyled>
}

export default ProfileCardPure;