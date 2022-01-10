import React from "react";
import Avatar from "../../../../shared/Avatar";
import Flex from "../../../../shared/Flex";
import Typography from "../../../../shared/Typography";
import Link from "../../../../shared/Link";
import {DeltaTypographyStyled, IdTypographyStyled, MatchCardWrapperStyled} from "./styled";
import {MatchCardProps} from "./MatchCard.props";
import MatchStatusCell from "../../../../shared/MatchStatusCell";

const MatchCard: React.FC<MatchCardProps> = ({match, onClick}) => {

	return <MatchCardWrapperStyled onClick={onClick} category={match.category || undefined}>
		<IdTypographyStyled size={'sm'} weight={'thin'}>
			#{match.id}
		</IdTypographyStyled>
		<Flex direction={'row'} className={'flex1 marginBottom'} align={'center'} justify={'spaceBetween'}>
			<Flex direction={'column'} align={'center'}>
				<Avatar size={'sm'} character={match.p1.character} />
				<Flex position={'relative'} className={'marginTopMd'} direction={'row'} align={'center'}>
					<Link size={'sm'}>
						{match.p1.username}
					</Link>
					{
						match.p1.delta && (
							<DeltaTypographyStyled className={'marginLeftSm'} color={match.p1.delta > 0 ? 'success' : 'error'}>
								{match.p1.delta > 0 && "+"}{match.p1.delta}
							</DeltaTypographyStyled>
						)
					}

				</Flex>

			</Flex>
			<Flex direction={'column'} align={'center'} className={'flex1 marginLeftXLg marginRightXLg'}>
				<Typography size={'lg'}>
					{match.p1.score || "?"} - {match.p2.score || "?"}
				</Typography>
				<Typography weight={'thin'} className={'marginTopSm'} size={'sm'}>
					FT {match.firstTo}
				</Typography>
			</Flex>

			<Flex direction={'column'} align={'center'}>
				<Avatar size={'sm'} character={match.p2.character} />
				<Flex position={'relative'} className={'marginTopMd'} direction={'row'} align={'center'}>
					<Link size={'sm'}>
						{match.p2.username}
					</Link>
					{
						match.p2.delta && (
							<DeltaTypographyStyled className={'marginLeftSm'} color={match.p2.delta > 0 ? 'success' : 'error'}>
								{match.p2.delta > 0 && "+"}{match.p2.delta}
							</DeltaTypographyStyled>
						)
					}
				</Flex>
			</Flex>
		</Flex>
	</MatchCardWrapperStyled>
}

export default MatchCard;