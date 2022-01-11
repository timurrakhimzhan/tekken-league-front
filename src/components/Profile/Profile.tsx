import ProfileCard from "./ProfileCard";
import {LogoutStyled, ProfileContainerStyled} from "./styled";
import React, {useState} from "react";
import {ProfileProps} from "./Profile.props";
import {AiOutlineLogout} from "react-icons/all";
import Typography from "../../shared/Typography";
import store from "../../store";
import useAuth from "../../hooks/use-auth";
import {useParams} from "react-router-dom";
import {useDeviceInfo} from "../../hooks/use-media-query";


const Profile: React.FC<ProfileProps> = (props) => {
    const {username} = useAuth();
    const {isMobile} = useDeviceInfo();
    const {username: usernameFromParams} = useParams<{username: string}>()
    return <ProfileContainerStyled direction={'column'} align={'center'} {...props}>
        <ProfileCard />
        {
            username === usernameFromParams && isMobile && (
              <LogoutStyled onClick={() => store.user.logout()} className={'marginTopAuto'} align={'center'}>
                  <AiOutlineLogout size={'12px'} className={'marginRightSm'} />
                  <Typography weight={'thin'} size={'xSm'} clickable>
                      Log out
                  </Typography>
              </LogoutStyled>
            )
        }
    </ProfileContainerStyled>
}

export default Profile;