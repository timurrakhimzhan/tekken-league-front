import React from "react";
import {Table, Tbody, Td, Th, THead, Tr} from "../../../shared/Table";
import {MyChallengesTablePureProps} from "./MyChallengesTable.pure.props";
import ChallengeStatusCell from "../../../shared/ChallengeStatusCell";
import {AiOutlineArrowRight} from "react-icons/all";
import IconWrapper from "../../../shared/IconWrapper";
import {MY_CHALLENGES_HIDE_COLUMNS} from "../../../constants";
import Link from "../../../shared/Link";

const MyChallengesTablePure: React.FC<MyChallengesTablePureProps> = ({items, onPlayerClick, onChallengeClick, columnsToHide}) => {
	return <Table>
		<THead>
			<Tr>
				<Th>
					#
				</Th>
				<Th>
					Challenger
				</Th>
				<Th>
					Challenged
				</Th>
				{
					!columnsToHide.includes(MY_CHALLENGES_HIDE_COLUMNS.FIRST_TO) && (
						<Th>
							First To (FT)
						</Th>
					)
				}
				{
					!columnsToHide.includes(MY_CHALLENGES_HIDE_COLUMNS.STATUS) && (
						<Th>
							Status
						</Th>
					)
				}
				<Th align={'center'}>
					Actions
				</Th>
			</Tr>
		</THead>
		<Tbody>
			{
				items.length === 0 && (
					<Tr>
						<Td colSpan={6} align={"center"} fontFamily={'thin'}>
							No challenges to you or of you were created yet
						</Td>
					</Tr>
				)
			}
			{
				items.map((item) => (
					<Tr key={item.id}>
						<Td>
							{item.id}
						</Td>
						<Td>
							<Link onClick={() => onPlayerClick(item.challenger.username)}>
								{item.challenger.username}
							</Link>
						</Td>
						<Td>
							<Link onClick={() => onPlayerClick(item.challenged.username)}>
								{item.challenged.username}
							</Link>
						</Td>
						{
							!columnsToHide.includes(MY_CHALLENGES_HIDE_COLUMNS.FIRST_TO) && (
								<Td>
									{item.firstTo}
								</Td>
							)
						}
						{
							!columnsToHide.includes(MY_CHALLENGES_HIDE_COLUMNS.STATUS) && (
								<Td>
									<ChallengeStatusCell status={item.status} />
								</Td>
							)
						}
						<Td align={'center'}>
							<IconWrapper onClick={() => onChallengeClick(item.id)}>
								<AiOutlineArrowRight />
							</IconWrapper>
						</Td>
					</Tr>
				))
			}

		</Tbody>
	</Table>
}

export default MyChallengesTablePure;