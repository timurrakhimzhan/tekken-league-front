import React from "react"
import Profile from "../../../components/Profile";
import MatchHistory from "../../../components/MatchHistory";
import {Route, Switch} from "react-router-dom";
import MatchInfo from "../../../components/MatchInfo";
import ProfileSearchTabs from "../../../components/ProfileSearchTabs";

const ProfileMatchesPage = () => {
    return <>
        <Switch>
            <Route path={"/matches/:username"} component={() => <ProfileSearchTabs className={'marginRightLg'} />} exact />
        </Switch>
        <Switch>
            <Route path={"/matches/:username"} component={() => <MatchHistory />} />
        </Switch>
        <Switch>
            <Route path={"/matches/:username/:id"} component={() => <MatchInfo className={'marginLeftLg'} />} exact />
        </Switch>
    </>
}

export default ProfileMatchesPage;