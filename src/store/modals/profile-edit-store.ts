import BaseStore from "../base-store";

export class ProfileEditStore extends BaseStore {
	private _isOpen: boolean = false;

	get isOpen() {
		return this._isOpen;
	}

	setIsOpen(value: boolean) {
		this._isOpen = value;
	}
}
