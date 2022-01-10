import BaseStore from "../base-store";
import {v4} from 'uuid';

type ToasterMessage = {
	uuid: string;
	content: string;
	variant: 'success' | 'error' | 'warning';
	visible: boolean;
	demonstrated: boolean;
	createdAt: Date;
};

export class ToasterStore extends BaseStore {
	dontCache = ["_messages", "counter"];
	private _messages: Array<ToasterMessage> = [];
	private counter: number = 0;

	createMessage(content: string, variant: 'success' | 'error' | 'warning') {
		const _uuid = v4();
		this._messages.push({
			uuid: _uuid,
			content,
			variant,
			visible: false,
			demonstrated: false,
			createdAt: new Date()
		})
		this.counter++;
		setTimeout(() => {
			const i = this._messages.findIndex(({uuid: uuid}) => _uuid === uuid);
			if(i >= 0) {
				this._messages[i].visible = true;
				this._messages[i].demonstrated = true;
			}
		}, 100);
		setTimeout(() => {
			const i = this._messages.findIndex(({uuid: uuid}) => _uuid === uuid);
			if(i >= 0) {
				this._messages[i].visible = false;
			}
		}, 3000);
		setTimeout(() => {
			this.removeToasterByUuid(_uuid);
		}, 5000);

	}

	removeToasterByUuid(uuid: string) {
		this._messages = this._messages.filter(({uuid: _uuid}) => uuid !== _uuid);
	}

	get messages() {
		return this._messages;
	}

}