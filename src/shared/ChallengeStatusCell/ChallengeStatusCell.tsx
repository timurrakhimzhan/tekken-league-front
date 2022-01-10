import React from "react";
import Typography from "../Typography";
import {ChallengeStatusCellProps} from "./ChallengeStatusCell.props";

const ChallengeStatusCell: React.FC<ChallengeStatusCellProps> = ({status, ...rest}) => {
    if(status === 'ACCEPTED') {
        return <Typography color={'success'} {...rest}>
            Accepted
        </Typography>
    }
    if(status === 'REJECTED') {
        return <Typography color={'error'} {...rest}>
            Rejected
        </Typography>
    }
    return <Typography color={'warning'} {...rest}>
        Pending
    </Typography>;
}

export default ChallengeStatusCell;