import React from "react";
import {GetMatchByIdRes} from "../../../../api/endpoints/match/types";
import {Table, Tbody, Td, Tr} from "../../../../shared/Table";
import Link from "../../../../shared/Link";
import Typography from "../../../../shared/Typography";
import MatchStatusCell from "../../../../shared/MatchStatusCell";
import {MatchInfoDetailsTablePureProps} from "./MatchInfoDetailsTable.pure.props";
import {
	AiFillCalendar,
	AiOutlineInfo,
	BsInfoCircle,
	BsPersonDash,
	BsPersonPlus,
	FaBattleNet,
	FaTable,
	GiAncientSword,
	GiAxeSword,
	GiCryoChamber,
	IoPerson,
} from "react-icons/all";
import Flex from "../../../../shared/Flex";


const MatchInfoDetailsTablePure: React.FC<MatchInfoDetailsTablePureProps> = ({match, onPlayerClick, onChallengeClick}) => {
	const isFinished = match.status === "FINISHED";
	const isDeclined = match.status === "DECLINED";
	return <Table>
		<Tbody>
			<Tr>
				<Td>
					<Flex align={'center'} >
						<IoPerson display={'block'} size={'12px'} className={'marginRightSm'} />
						Player #1:
					</Flex>
				</Td>
				<Td>
					<Link onClick={() => onPlayerClick(match.p1.username)}>
						{match.p1.username}
					</Link>
					{
						isFinished && match.p1.delta && (
							<Typography className={'marginLeftMd'} color={match.p1.delta > 0 ? 'success' : 'error'}>
								{match.p1.delta > 0 && '+'}{match.p1.delta} points
							</Typography>
						)
					}
				</Td>
			</Tr>
			<Tr>
				<Td>
					<Flex align={'center'} >
						<IoPerson display={'block'} size={'12px'} className={'marginRightSm'} />
						Player #2:
					</Flex>
				</Td>
				<Td>
					<Link onClick={() => onPlayerClick(match.p2.username)}>
						{match.p2.username}
					</Link>
					{
						isFinished && match.p2.delta && (
							<Typography className={'marginLeftMd'} color={match.p2.delta > 0 ? 'success' : 'error'}>
								{match.p2.delta > 0 && '+'}{match.p2.delta} points
							</Typography>
						)
					}
				</Td>
			</Tr>
			<Tr>
				<Td>
					<Flex align={'center'} >
						<GiAncientSword display={'block'} size={'12px'} className={'marginRightSm'} />
						First To (FT):
					</Flex>
				</Td>
				<Td>
					{match.firstTo}
				</Td>
			</Tr>
			<Tr>
				<Td>
					<Flex align={'center'} >
						<BsInfoCircle color={'white'} display={'block'} size={'12px'} className={'marginRightSm'} />
						Status:
					</Flex>
				</Td>
				<Td>
					<MatchStatusCell status={match.status} />
				</Td>
			</Tr>
			<Tr>
				<Td>
					<Flex align={'center'} >
						<AiFillCalendar color={'white'} display={'block'} size={'12px'} className={'marginRightSm'} />
						Match created date:
					</Flex>
				</Td>
				<Td>
					{new Date(match.createdAt).toLocaleString()}
				</Td>
			</Tr>
			{
				isFinished && match.p1.score !== null && match.p2.score !== null && (
					<>
						<Tr>
							<Td>
								<Flex align={'center'} >
									<GiAxeSword display={'block'} size={'12px'} className={'marginRightSm'} />
									Final Score:
								</Flex>
							</Td>
							<Td>
								<Link className={'marginRightLg'} onClick={() => onPlayerClick(match.p1.username)}>
									{match.p1.username}
								</Link>
								{match.p1.score}-{match.p2.score}
								<Link className={'marginLeftLg'}  onClick={() => onPlayerClick(match.p2.username)}>
									{match.p2.username}
								</Link>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<Flex align={'center'} >
									<GiCryoChamber display={'block'} size={'12px'} className={'marginRightSm'} />
									Winner:
								</Flex>
							</Td>
							<Td>
								<Link>
									{match.p1.score > match.p2.score ? match.p1.username : match.p2.username}
								</Link>
							</Td>
						</Tr>
					</>
				)
			}
			{
				match.resultSubmittedAt && (
					<Tr>
						<Td>
							<Flex align={'center'} >
								<AiFillCalendar display={'block'} size={'12px'} className={'marginRightSm'} />
								Results submitted at:
							</Flex>
						</Td>
						<Td>
							{new Date(match.resultSubmittedAt).toLocaleString()}
						</Td>
					</Tr>
				)
			}
			{
				match.submittedBy && (
					<Tr>
						<Td>
							<Flex align={'center'} >
								<IoPerson display={'block'} size={'12px'} className={'marginRightSm'} />
								Results submitted by:
							</Flex>
						</Td>
						<Td>
							<Link  onClick={() => onPlayerClick(match.submittedBy as string)}>
								{match.submittedBy}
							</Link>
						</Td>
					</Tr>
				)
			}
			{
				match.challengeId && (
					<Tr>
						<Td>
							<Flex align={'center'} >
								<FaTable display={'block'} size={'12px'} className={'marginRightSm'} />
								Challenge id:

							</Flex>
						</Td>
						<Td>
							<Link onClick={() => onChallengeClick(match.challengeId as number)}>
								{match.challengeId}
							</Link>
						</Td>
					</Tr>
				)
			}
			{
				isDeclined && match.declinedBy && (
					<Tr>
						<Td>
							Declined by:
						</Td>
						<Td>
							<Link onClick={() => onPlayerClick(match.declinedBy as string)}>
								{match.declinedBy}
							</Link>
						</Td>
					</Tr>
				)
			}
			{
				isDeclined && (
					<Tr>
						<Td>
							Declined comment:
						</Td>
						<Td>
							{match.declineComment || "No comment given"}
						</Td>
					</Tr>
				)
			}
			{
				isDeclined && (
					<Tr>
						<Td>
							Declined at:
						</Td>
						<Td>
							{new Date(match.updatedAt).toLocaleString()}
						</Td>
					</Tr>
				)
			}
		</Tbody>
	</Table>
}

export default MatchInfoDetailsTablePure;