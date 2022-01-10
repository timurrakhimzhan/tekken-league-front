import {GetChallengesRes} from "../../../../api/endpoints/challenge/types";

export type ChallengeCardProps = {
	challenge: GetChallengesRes["items"][0]
	onClick: () => void;
}
