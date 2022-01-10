import API from "../../index";
import {LoginRes} from "../../endpoints/authentication/types";
import MockAdapter from "axios-mock-adapter";


const setupAuthenticationMocks = (mock: MockAdapter) => {
    mock.onPost(API.authentication.methods.login).reply<LoginRes>(200, { accessToken: 'jwt', refreshToken: 'jwt' });
}

export default setupAuthenticationMocks;
