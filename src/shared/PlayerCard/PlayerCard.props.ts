import {SyntheticEvent} from "react";

export type PlayerCardProps = {
    username: string;
    rank: number;
    character: string;
    steamUrl: string;
    rating: number;
    isMine: boolean;
    onChallenge?: (event: SyntheticEvent) => void;
    onClick?: () => void;
}