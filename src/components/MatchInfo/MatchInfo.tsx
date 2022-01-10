import React from "react"
import {MatchInfoContainerStyled, BackIconWrapperStyled} from "./styled"
import BackIcon from "../../shared/BackIcon";
import MatchInfoDetails from "./MatchInfoDetails";
import {useHistory, useParams} from "react-router-dom";
import {MatchInfoProps} from "./MatchInfo.props";
import useNavigationHandlers from "../../hooks/use-navigation-handlers";

const MatchInfo: React.FC<MatchInfoProps> = (props) => {
	const {username} = useParams<{username: string}>();
	const {handleMatchesOpen} = useNavigationHandlers();
	return <MatchInfoContainerStyled direction={'column'} {...props}>
		<BackIconWrapperStyled>
			<BackIcon onClick={() => handleMatchesOpen(username)} />
		</BackIconWrapperStyled>
		<MatchInfoDetails />
	</MatchInfoContainerStyled>
}

export default MatchInfo;