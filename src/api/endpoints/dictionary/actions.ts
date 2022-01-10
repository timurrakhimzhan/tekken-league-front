import {GetCharactersRes, GetUsernamesRes} from "./types";
import methods from "./methods";
import axiosInstance from "../../axios";

export default {
    getCharacters: (): Promise<GetCharactersRes> => {
        return axiosInstance.get(methods.getCharacters).then((res) => res.data);
    },
    getUsernames: (): Promise<GetUsernamesRes> => {
        return axiosInstance.get(methods.getUsernames).then((res) => res.data);
    }
}