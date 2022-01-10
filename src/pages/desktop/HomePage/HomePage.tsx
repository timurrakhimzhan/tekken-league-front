import React from "react"
import Leaderboard from "../../../components/Leaderboard";
import AuthForms from "../../../components/AuthForms";
import AuthProtected from "../../../shared/AuthProtected";
import UnAuthProtected from "../../../shared/UnAuthProtected";
import SearchPlayer from "../../../components/SearchPlayer";


const HomePage = () => {
    return <>
        <Leaderboard className={'marginRightLg'} />
        <AuthProtected>
            <SearchPlayer />
        </AuthProtected>
        <UnAuthProtected>
            <AuthForms />
        </UnAuthProtected>
    </>

}

export default HomePage;