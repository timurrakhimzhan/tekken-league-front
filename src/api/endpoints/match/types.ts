export type MatchStatus = 'IN_PROGRESS' | 'CONFIRMING_SCORE' | 'DECLINED' | 'FINISHED';


export type GetMatchesByUsernameRes = {
    count: number,
    items: Array<{
        id: number;
        p1: {
            username: string;
            score: number | null;
            character: string;
            delta: number | null;
        };
        p2: {
            username: string;
            score: number | null;
            character: string;
            delta: number | null;
        };
        firstTo: number;
        createdAt: Date;
        status: MatchStatus;
        category: "WIN" | "LOSE" | null;
    }>
}

export type GetMatchByIdRes = {
    id: number;
    p1: {
        username: string;
        score: number | null;
        delta: number | null;
    };
    p2: {
        username: string;
        score: number | null;
        delta: number | null;
    };
    firstTo: number;
    createdAt: Date;
    updatedAt: Date;
    status: MatchStatus;
    challengeId: number | null;
    declinedBy: string | null;
    declineComment: string | null;
    submittedBy: string | null;
    resultSubmittedAt: Date | null;
}

export type DeclineMatchReqBody = {
    comment?: string;
}

export type SubmitScoreReqBody = {
    p1Score: number;
    p2Score: number;
}

export type ChangeScoreConfirmationReqBody = {
    confirmation: "CONFIRMED" | "REJECTED"
}

export type MatchApi = {
    methods: {
        getMatchesByUsername: (username: string) => string;
        getMatchById: (id: number) => string;
        declineMatch: (id: number) => string;
        submitScore: (id: number) => string;
        changeScoreConfirmation: (id: number) => string;

    };
    actions: {
        getMatchesByUsername: (username: string) => Promise<GetMatchesByUsernameRes>;
        getMatchById: (id: number) => Promise<GetMatchByIdRes>;
        declineMatch: (id: number, data: DeclineMatchReqBody) => Promise<void>;
        submitScore: (id: number, data: SubmitScoreReqBody) => Promise<void>;
        changeScoreConfirmation: (id: number, data: ChangeScoreConfirmationReqBody) => Promise<void>;
    }
}
