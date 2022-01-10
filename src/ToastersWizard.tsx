import {useSnapshot} from "valtio";
import store from "./store";
import {useMemo} from "react";
import React from "react";
import Toaster from "./shared/Toaster";

const ToastersWizard = () => {
	const {messages} = useSnapshot(store.toaster);
	const indexOfFirstUnseen = useMemo(() => {
		const index = messages.findIndex(({demonstrated}) => !demonstrated);
		if(index === -1) {
			return messages.length;
		}
		return index;
	}, [messages]);


	return <>
		{
			messages.map((message, i) => {
				if(message.demonstrated) {
					return (
						<Toaster key={message.uuid} variant={message.variant} style={{
							bottom: (indexOfFirstUnseen - i - 1) * 60 + 9,
							opacity: message.visible ? 1 : 0,
						}} onClose={() => store.toaster.removeToasterByUuid(message.uuid)}>
							{message.content}
						</Toaster>
					)
				}
				return (
					<Toaster key={message.uuid} variant={message.variant} style={{bottom: (i - indexOfFirstUnseen + 1) * -60 - 9}}>
						{message.content}
					</Toaster>
				)
			})
		}
		</>
}

export default ToastersWizard;