import React from "react"
import Profile from "../../../components/Profile";
import MatchHistory from "../../../components/MatchHistory";
import {Route, Switch} from "react-router-dom";
import MatchInfo from "../../../components/MatchInfo";
import MatchHistoryMin from "./MatchHistoryMin";
import {useDesktopInfo} from "../../../hooks/use-media-query";

const ProfileMatchesPage = () => {
    const {isBigDesktop} = useDesktopInfo();
    return <>
        <Switch>
            <Route path={"/matches/:username"} component={() => <Profile className={'marginRightLg'} />} exact />
        </Switch>
        <Switch>
            <Route path={"/matches/:username"} component={isBigDesktop ? () => <MatchHistory /> : () => <MatchHistoryMin />} />
        </Switch>
        <Switch>
            <Route path={"/matches/:username/:id"} component={() => <MatchInfo className={'marginLeftLg'} />} exact />
        </Switch>
    </>
}

export default ProfileMatchesPage;