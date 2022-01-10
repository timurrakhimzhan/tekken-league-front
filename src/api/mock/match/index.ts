import API from "../../index";
import {GetMatchesByUsernameRes} from "../../endpoints/match/types";
import MockAdapter from "axios-mock-adapter";

const raPeeraHistory: GetMatchesByUsernameRes = {
    count: 4,
    items: [
        {
            id: 0,
            p1: { username: 'ra_peera', score: 7, character: "KING", delta: 19 },
            p2:{ username: 'Lets', score: 0, character: "JULIA_CHANG", delta: -19 },
            firstTo: 7,
            createdAt: new Date('08.06.2021'),
            status: 'FINISHED',
            category: "WIN",
        },
        {
            id: 1,
            p1: { username: 'ra_peera', score: 7, character: "KING", delta: null },
            p2:{ username: 'Pshak', score: 1, character: "LEO", delta: null },
            firstTo: 7,
            createdAt: new Date('06.06.2021'),
            status: 'CONFIRMING_SCORE',
            category: null,
        },
        {
            id: 2,
            p1: { username: 'ra_peera', score: 0, character: "KING", delta: null },
            p2:{ username: 'ironchef', score: 0, character: "PAUL", delta: null },
            firstTo: 7,
            createdAt: new Date('05.06.2021'),
            status: 'CONFIRMING_SCORE',
            category: null,
        },
        {
            id: 3,
            p1: { username: 'ra_peera', score: 7, character: "KING", delta: 19 },
            p2:{ username: 'Disciple', score: 5, character: "JULIA_CHANG", delta: -19 },
            firstTo: 7,
            createdAt: new Date('04.06.2021'),
            status: 'IN_PROGRESS',
            category: null,
        }
    ]
}


const discipleHistory: GetMatchesByUsernameRes = {
    count: 3,
    items: [
        {
            id: 0,
            p1: { username: 'Disciple', score: 0, character: "JULIA_CHANG", delta: 19 },
            p2:{ username: 'Lets', score: 0, character: "JULIA_CHANG", delta: -19 },
            firstTo: 10,
            createdAt: new Date('08.06.2021'),
            status: 'CONFIRMING_SCORE',
            category: null,
        },
        {
            id: 1,
            p1: { username: 'ra_peera', score: 7, character: "KING", delta: -16 },
            p2:{ username: 'Disciple', score: 5, character: "JULIA_CHANG", delta: 6 },
            firstTo: 7,
            createdAt: new Date('06.06.2021'),
            status: 'FINISHED',
            category: "LOSE",
        },
        {
            id: 2,
            p1: { username: 'Disciple', score: 5, character: "JULIA_CHANG", delta: 19 },
            p2:{ username: 'Raven', score: 1, character: "JULIA_CHANG", delta: -19 },
            firstTo: 5,
            createdAt: new Date('05.06.2021'),
            status: 'FINISHED',
            category: null,
        }
    ]
}

const setupMatchMocks = (mock: MockAdapter) => {
    mock.onGet(API.match.methods.getMatchesByUsername("Disciple")).reply<GetMatchesByUsernameRes>(200, discipleHistory);
    mock.onGet(API.match.methods.getMatchesByUsername("ra_peera")).reply<GetMatchesByUsernameRes>(200, raPeeraHistory);
}

export default setupMatchMocks;
