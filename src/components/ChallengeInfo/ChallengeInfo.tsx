import React from "react"
import { ChallengeInfoContainerStyled, BackIconWrapperStyled} from "./styled"
import Typography from "../../shared/Typography";
import BackIcon from "../../shared/BackIcon";
import ChallengeInfoDetails from "./ChallengeInfoDetails";
import {useHistory} from "react-router-dom";
import {ChallengeInfoProps} from "./ChallengeInfo.props";
import useNavigationHandlers from "../../hooks/use-navigation-handlers";

const ChallengeInfo: React.FC<ChallengeInfoProps> = (props) => {
	const {handleChallengesOpen} = useNavigationHandlers()
	return <ChallengeInfoContainerStyled direction={'column'} {...props}>
		<BackIconWrapperStyled>
			<BackIcon onClick={handleChallengesOpen} />
		</BackIconWrapperStyled>
		<ChallengeInfoDetails />
	</ChallengeInfoContainerStyled>
}

export default ChallengeInfo;