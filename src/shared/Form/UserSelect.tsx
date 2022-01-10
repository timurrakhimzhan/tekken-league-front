import React from "react";
import {CharacterSelectProps} from "./CharacterSelect.props";
import Select from "./Select";
import useUsernames from "../../hooks/query-hooks/use-usernames";

const UserSelect: React.FC<CharacterSelectProps> = (props) => {
	const {data} = useUsernames();
	return <Select options={data?.items.map((username) => ({label: username, value: username}))} {...props} />
}

export default UserSelect;