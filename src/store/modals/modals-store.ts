import BaseStore from "../base-store";
import {CreateChallengeStore} from "./create-challenge-store";
import {ProfileEditStore} from "./profile-edit-store";

export class ModalsStore extends BaseStore {
	readonly profileEdit = new ProfileEditStore();
	readonly createChallenge = new CreateChallengeStore();
}