export default {
    getMatchesByUsername: (username: string) => `matches/by-username/${username}`,
    getMatchById: (id: number) => `matches/${id}`,
    declineMatch: (id: number) => `matches/${id}/decline`,
    submitScore: (id: number) => `matches/${id}/submit-score`,
    changeScoreConfirmation: (id: number) => `matches/${id}/change-score-confirmation`,
};