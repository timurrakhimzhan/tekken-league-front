import React from "react";
import Avatar from "../../../../shared/Avatar";
import Flex from "../../../../shared/Flex";
import Link from "../../../../shared/Link";
import {IdTypographyStyled, ChallengeCardWrapperStyled} from "./styled";
import {ChallengeCardProps} from "./ChallengeCard.props";
import Typography from "../../../../shared/Typography";

const ChallengeCard: React.FC<ChallengeCardProps> = ({challenge, onClick}) => {
	return <ChallengeCardWrapperStyled onClick={onClick} status={challenge.status}>
		<IdTypographyStyled size={'sm'} weight={'thin'}>
			#{challenge.id}
		</IdTypographyStyled>
		<Flex direction={'row'} className={'flex1 marginBottom'} align={'center'} justify={'spaceBetween'}>
			<Flex direction={'column'} align={'center'}>
				<Avatar size={'sm'} character={challenge.challenger.character} />
				<Link size={'xSm'} className={'marginTopMd'} weight={'regular'}>
					{challenge.challenger.username}
				</Link>
			</Flex>
			<Typography weight={'thin'} className={'marginLeftMd marginRightMd'} size={'sm'}>
				FT {challenge.firstTo}
			</Typography>
			<Flex direction={'column'} align={'center'}>
				<Avatar size={'sm'} character={challenge.challenged.character} />
				<Link size={'xSm'} className={'marginTopMd'} weight={'regular'}>
					{challenge.challenged.username}
				</Link>
			</Flex>
		</Flex>
	</ChallengeCardWrapperStyled>
}

export default ChallengeCard;