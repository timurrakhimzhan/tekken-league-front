import {MatchStatus} from "../../api/endpoints/match/types";
import React from "react";
import Typography from "../Typography";

export type MatchStatusCellProps = React.ComponentProps<typeof Typography> & {
    status: MatchStatus
}