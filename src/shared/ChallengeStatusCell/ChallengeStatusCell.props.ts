import {ChallengeStatus} from "../../api/endpoints/challenge/types";
import React from "react";
import Typography from "../Typography";

export type ChallengeStatusCellProps = React.ComponentProps<typeof Typography> & {
    status: ChallengeStatus;
}