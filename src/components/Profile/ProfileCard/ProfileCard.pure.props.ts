import {GetProfileInfoRes} from "../../../api/endpoints/user/types";

export type ProfileCardPureProps = {
    onEdit?: () => void;
    onFight?: (username: string) => void;
    onMatches?: (username: string) => void;
    isMine: boolean;
    profileInfo: GetProfileInfoRes
}