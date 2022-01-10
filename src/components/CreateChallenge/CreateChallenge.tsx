import CreateChallengeForm from "../../shared/CreateChallengeForm";
import React from "react";
import { CreateChallengeContainerStyled } from "./styled";
import Typography from "../../shared/Typography";
import store from "../../store";
import {CreateChallengeProps} from "./CreateChallenge.props";
import {useDeviceInfo} from "../../hooks/use-media-query";

const CreateChallenge: React.FC<CreateChallengeProps> = (props) => {
	const {isMobile} = useDeviceInfo();
	return <CreateChallengeContainerStyled direction={'column'} {...props} mobile={isMobile}>
			<Typography className={'marginBottomLg marginLeftAuto marginRightAuto'}  color={'primary'} size={'xLg'} weight={'bold'}>
				Challenge someone
			</Typography>
		<CreateChallengeForm onSuccess={() => store.toaster.createMessage("Challenge successfully created", "success")} />
	</CreateChallengeContainerStyled>
}

export default CreateChallenge;