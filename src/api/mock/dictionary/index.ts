import API from "../../index";
import {GetCharactersRes} from "../../endpoints/dictionary/types";
import MockAdapter from "axios-mock-adapter";

const CHARACTERS = ["Akuma", "Alisa Bosconovitch", "Anna Williams", "Armor King", "Asuka Kazama", "Bob Richards", "Bryan Fury", "Claudio Serafino", "Craig Marduk", "Devil Jin", "Eddy Gordo", "Eliza", "Fahkumram", "Feng Wei", "Ganryu", "Geese Howard", "Gigas", "Heihachi Mishima", "Hwoarang", "Jack-7", "Jin Kazama", "Josie Rizal", "Julia Chang", "Katarina Alves", "Kazumi Mishima", "Kazuya Mishima", "King", "Kuma", "Kunimitsu", "Lars Alexandersson", "Lee Chaolan", "Lei Wulong", "Leo Kliesen", "Leroy Smith", "Lidia Sobieska", "Lili de Rochefort", "Ling Xiaoyu", "Lucky Chloe", "Marshall Law", "Master Raven", "Miguel Caballero Rojo", "Negan Smith", "Nina Williams", "Noctis Lucis Caelum", "Panda", "Paul Phoenix", "Sergei Dragunov", "Shaheen", "Steve Fox", "Yoshimitsu", "Zafina"];

const setupDictionaryMocks = (mock: MockAdapter) => {
    mock.onGet(API.dictionary.methods.getCharacters).reply<GetCharactersRes>(200, {
        count: CHARACTERS.length,
        items: CHARACTERS.map((character) => ({
            codename: character.split(" ").join("_").toUpperCase(),
            labelEn: character,
            labelRu: ''
        }))
    });
}

export default setupDictionaryMocks;
