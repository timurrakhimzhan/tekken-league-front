import CreateChallengeModal from "./shared/CreateChallengeModal";
import ProfileEditModal from "./components/Profile/ProfileEditModal";
import {useSnapshot} from "valtio";
import store from "./store";
import React from "react";

const Modals = () => {
	const {isOpen: isProfileEditOpen} = useSnapshot(store.modals.profileEdit);
	const {isOpen: isCreateChallengeOpen, challengedUsername} = useSnapshot(store.modals.createChallenge);
	console.log(isProfileEditOpen, isCreateChallengeOpen)
	console.log(store.user);
	return <>
			<CreateChallengeModal open={isCreateChallengeOpen}
														onClose={() => store.modals.createChallenge.setIsOpen(false)}
														opponent={challengedUsername}
			/>
			<ProfileEditModal open={isProfileEditOpen}
												onClose={() => store.modals.profileEdit.setIsOpen(false)} />
		</>
}

export default Modals;