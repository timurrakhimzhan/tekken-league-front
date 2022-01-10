import React from "react";
import {Redirect, useParams} from "react-router-dom";

const ProfilePage = () => {
	const {username} = useParams<{username: string}>();
	return <Redirect to={`/matches/${username}`} />
}

export default ProfilePage;