import BaseStore from "../base-store";

export class CreateChallengeStore extends BaseStore {
	private _isOpen: boolean = false;
	private _challengedUsername: string | null = null;

	get isOpen() {
		return this._isOpen;
	}

	get challengedUsername() {
		return this._challengedUsername
	}

	setIsOpen(value: boolean) {
		if(!value) {
			this._challengedUsername = null;
		}
		this._isOpen = value;
	}

	challenge(value: string) {
		this._challengedUsername = value;
		this._isOpen = true;
	}
}