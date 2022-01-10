export default {
    createChallenge: 'challenges',
    getChallenges: 'challenges',
    getChallenge: (id: number) => `challenges/${id}`,
    changeChallengeStatus: (id: number) => `challenges/${id}`
};