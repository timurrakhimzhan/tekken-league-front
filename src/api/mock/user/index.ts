import API from "../../index";
import MockAdapter from "axios-mock-adapter";
import {GetProfileInfoRes, GetUsersRes, GetUsersReqParams, GetTop10Res} from "../../endpoints/user/types";


const raPeera: GetProfileInfoRes = {
    username: 'ra_peera',
    character: 'KING',
    rank: 1,
    rating: 1090,
    steamUrl: 'https://steamcommunity.com/id/ra_peera',
    otherInfo: 'Other information',
    wins: 9,
    loses: 0
};

const disciple: GetProfileInfoRes = {
    username: 'Disciple',
    character: 'JULIA_CHANG',
    rank: 2,
    rating: 1050,
    steamUrl: 'https://steamcommunity.com/profiles/76561198210689671',
    otherInfo: 'Fullscreen? Lashing arrow.',
    wins: 6,
    loses: 1
}

const players = [
    {id: 1, username: 'ra_peera', character: 'KING', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 1, rating: 1090},
    {id: 2, username: 'disciple', character: 'JULIA_CHANG', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 2, rating: 1080},
    {id: 3, username: 'dchingiz', character: 'LEROY_SMITH', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 3, rating: 1060},
    {id: 4, username: 'Timsonic', character: 'BOB_RICHARDS', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 4, rating: 1052},
    {id: 5, username: 'Pshak', character: 'LEO_KLIESEN', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 5, rating: 1020},
    {id: 6, username: 'rinrinrin', character: 'DEVIL_JIN', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 6, rating: 950},
    {id: 7, username: 'Kindzi', character: 'ASUKA_KAZAMA', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 7, rating: 900},
    {id: 8, username: 'Infecto', character: 'LEE_CHAOLAN', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 8, rating: 890},
    {id: 9, username: 'Amos', character: 'CRAIG_MARDUK', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 9, rating: 850},
    {id: 10, username: 'Knee', character: 'STEVE_FOX', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 10, rating: 840},
    {id: 11, username: 'JDCR', character: 'ARMOR_KING', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 11, rating: 800},
    {id: 12, username: 'Lil Majin', character: 'KING', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 12, rating: 790},
    {id: 13, username: 'JimmyJ Tran', character: 'BRYAN_FURY', steamUrl: 'https://steamcommunity.com/id/ra_peera', rank: 13, rating: 750},
]

const setupUserMocks = (mock: MockAdapter) => {
    mock.onPost(API.user.methods.register).reply<void>(200);
    mock.onGet(API.user.methods.getProfile(raPeera.username)).reply<GetProfileInfoRes>(200, raPeera);
    mock.onGet(API.user.methods.getProfile(disciple.username)).reply<GetProfileInfoRes>(200, disciple);
    const filteredPlayers = players.filter(({username}) => username.includes('r'));
    mock.onGet(API.user.methods.getUsers, {params: {}}).reply<GetUsersRes>(200, {
        count: players.length,
        items: players
    });
    mock.onGet(API.user.methods.getUsers, {params: {username: 'r'}}).reply<GetUsersRes>(200, ({
        count: filteredPlayers.length,
        items: filteredPlayers
    }));
    mock.onGet(API.user.methods.getTop10).reply<GetTop10Res>(200, {
        count: 12,
        items: [
            {username: 'ra_peera', rank: 1, rating: 1090},
            {username: 'disciple', rank: 2, rating: 1080},
            {username: 'dchingiz', rank: 3, rating: 1060},
            {username: 'Timsonic', rank: 4, rating: 1052},
            {username: 'Pshak', rank: 5, rating: 1020},
            {username: 'rinrinrin', rank: 6, rating: 950},
            {username: 'Kindzi', rank: 7, rating: 900},
            {username: 'Infecto', rank: 8, rating: 890},
            {username: 'Amos', rank: 9, rating: 850},
            {username: 'Knee', rank: 10, rating: 840},
            // {id: 11, username: 'JDCR', rank: 11, rating: 800},
            // {id: 12, username: 'Lil Majin', rank: 12, rating: 790},
            // {id: 13, username: 'JimmyJ Tran', rank: 13, rating: 750},

        ]
    });
}

export default setupUserMocks;

