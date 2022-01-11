import React from "react";
import {CreateChallengeModalProps} from "./CreateChallengeModal.props";
import { CreateChallengeContainerStyled } from "./styled";
import AuthProtected from "../AuthProtected";
import Modal from "../Modal";
import CreateChallengeForm from "../CreateChallengeForm";
import Typography from "../Typography";
import store from "../../store";

const CreateChallengeModal: React.FC<CreateChallengeModalProps> = ({open, onClose, opponent}) => {
	const handleOnSuccess = () => {
		onClose();
		store.toaster.createMessage("Challenge was successfully created", "success");
	}
	return <AuthProtected>
		<Modal className={'paddingLeft0 paddingRight0 paddingTopXLg paddingBottomXLg'} onClose={onClose} open={open}>
			<CreateChallengeContainerStyled>
				<Typography className={'marginLeftAuto marginRightAuto marginBottomMd'} size={'xLg'} weight={'bold'} color={'primary'}>
					Create challenge
				</Typography>
				<CreateChallengeForm opponent={opponent} onSuccess={handleOnSuccess} />
			</CreateChallengeContainerStyled>
		</Modal>
	</AuthProtected>
}

export default CreateChallengeModal;