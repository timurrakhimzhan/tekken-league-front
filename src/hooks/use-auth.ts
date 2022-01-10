import {useSnapshot} from "valtio";
import store from "../store";

const useAuth = () => {
    const {isLoggedIn, username, accessToken, refreshToken} = useSnapshot(store.user);
    return {isLoggedIn, username, accessToken, refreshToken}
}

export default useAuth;