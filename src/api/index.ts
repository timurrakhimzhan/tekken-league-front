import dictionaryApi from "./endpoints/dictionary";
import matchApi from "./endpoints/match";
import authenticationApi from "./endpoints/authentication";
import userApi from "./endpoints/user";
import challengeApi from "./endpoints/challenge";

const API = {
    dictionary: dictionaryApi,
    match: matchApi,
    authentication: authenticationApi,
    user: userApi,
    challenge: challengeApi
}
export default API;