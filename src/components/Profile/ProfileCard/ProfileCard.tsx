import React, {useState} from "react";
import {useQuery} from "react-query";
import {API_PROFILE_INFO} from "../../../constants";
import API from "../../../api";
import Spinner from "../../../shared/Spinner";
import ProfileCardPure from "./ProfileCard.pure";
import CreateChallengeModal from "../../../shared/CreateChallengeModal";
import ProfileEditModal from "../ProfileEditModal";
import {useParams} from "react-router-dom";
import store from "../../../store";
import useAuth from "../../../hooks/use-auth";
import {useDeviceInfo} from "../../../hooks/use-media-query";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const ProfileCard: React.FC= () => {
    const {username} = useAuth();
    const {username: usernameFromParams} = useParams<{username: string}>();
    const {data: profileInfo, isLoading: isLoadingProfile} = useQuery([API_PROFILE_INFO, usernameFromParams], () => API.user.actions.getProfile(usernameFromParams), {
        initialData: null,
    });
    const {isMobile} = useDeviceInfo();
    const {handleMatchesOpen} = useNavigationHandlers();
    if(!profileInfo || isLoadingProfile) {
        return <Spinner color={'primary'} size={'md'} />
    }
    return <>
        <ProfileCardPure onEdit={() => store.modals.profileEdit.setIsOpen(true)}
                         isMine={username === usernameFromParams}
                         onFight={(username) => store.modals.createChallenge.challenge(username)}
                         onMatches={isMobile ? (value: string) => handleMatchesOpen(value) : undefined}
                         profileInfo={profileInfo}
        />
    </>
}

export default ProfileCard;