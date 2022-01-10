import MockAdapter from "axios-mock-adapter";
import API from "../../index";

const setupChallengeMocks = (mock: MockAdapter) => {
	mock.onPost(API.challenge.methods.createChallenge).reply<void>(200);
}

export default setupChallengeMocks;