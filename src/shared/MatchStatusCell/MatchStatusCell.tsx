import React from "react";
import Typography from "../Typography";
import {MatchStatusCellProps} from "./MatchStatusCell.props";

const MatchStatusCell: React.FC<MatchStatusCellProps> = ({status, ...rest}) => {
    if(status === 'DECLINED') {
        return <Typography color={'error'} {...rest}>
            Declined
        </Typography>
    }
    if(status === 'IN_PROGRESS') {
        return <Typography color={'secondary'} {...rest}>
            In progress
        </Typography>
    }
    if(status === 'FINISHED') {
        return <Typography color={'success'} {...rest}>
            Finished
        </Typography>
    }
    return <Typography color={'warning'} {...rest}>
        Confirming score
    </Typography>;
}

export default MatchStatusCell;