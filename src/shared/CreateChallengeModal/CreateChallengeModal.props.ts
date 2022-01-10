import {ModalProps} from "../Modal/Modal.props";

export type CreateChallengeModalProps = ModalProps & {
	opponent?: string | null;
};