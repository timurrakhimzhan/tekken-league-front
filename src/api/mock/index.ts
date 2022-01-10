import setupDictionaryMocks from "./dictionary";
import setupAuthenticationMocks from "./authentication";
import setupMatchMocks from "./match";
import setupUserMocks from "./user";
import MockAdapter from "axios-mock-adapter";
import axiosInstance from "../axios";
import setupChallengeMocks from "./challenge";

const setupMocks = () => {
    const mock = new MockAdapter(axiosInstance, {delayResponse: 1000});
    setupDictionaryMocks(mock);
    setupMatchMocks(mock);
    setupAuthenticationMocks(mock);
    setupMatchMocks(mock);
    setupUserMocks(mock);
    setupChallengeMocks(mock);
}

export default setupMocks;