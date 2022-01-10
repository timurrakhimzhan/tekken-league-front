export type CreateChallengeBody = {
	opponentUsername: string;
	firstTo: number;
	comment?: string;
}

export type ChallengeStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

export type GetChallengesRes = {
	count: number;
	items: Array<{
		id: number;
		challenger: {
			username: string;
			character: string;
		};
		challenged: {
			username: string;
			character: string;
		};
		firstTo: number;
		date: Date;
		status: ChallengeStatus,
	}>
}

export type GetChallengeRes = {
	id: number;
	challengerUsername: string;
	challengedUsername: string;
	firstTo: number;
	status: ChallengeStatus;
	answerComment: string | null;
	challengeComment: string | null;
	statusChangedAt: Date | null;
	matchId: number | null;
}

export type ChangeChallengeStatusBody = {
	comment?: string;
	confirmation: Exclude<ChallengeStatus, "PENDING">
}

export type ChallengeApi = {
	methods: {
		createChallenge: string;
		getChallenges: string;
		getChallenge: (id: number) => string;
		changeChallengeStatus: (id: number) => string;
	};
	actions: {
		createChallenge: (data: CreateChallengeBody) => Promise<void>;
		getChallenges: () => Promise<GetChallengesRes>;
		getChallenge: (id: number) => Promise<GetChallengeRes>;
		changeChallengeStatus: (id: number, changeInfo: ChangeChallengeStatusBody) => Promise<void>;
	}
}