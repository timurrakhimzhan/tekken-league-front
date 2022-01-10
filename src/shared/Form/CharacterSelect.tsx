import Select from "./Select";
import React from "react";
import {useQuery} from "react-query";
import {API_DICTIONARY_CHARACTERS} from "../../constants";
import API from "../../api";
import {CharacterSelectProps} from "./CharacterSelect.props";
import LinearLoader from "../LinearLoader";
import useCharacters from "../../hooks/query-hooks/use-characters";

const CharacterSelect: React.FC<CharacterSelectProps> = (props) => {
    const {data} = useCharacters();
    return <Select options={data?.items.map(({labelEn, codename}) => ({label: labelEn, value: codename}))} {...props} />
}

export default CharacterSelect;