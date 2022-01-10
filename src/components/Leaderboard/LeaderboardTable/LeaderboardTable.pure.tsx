import React from "react";
import {Table, Tbody, Td, Th, THead, Tr} from "../../../shared/Table";
import {LeaderboardTablePureProps} from "./LeaderboardTable.pure.props";
import Link from "../../../shared/Link";

const LeaderboardTablePure: React.FC<LeaderboardTablePureProps> = ({items, onPlayerClick}) => {
	return <Table>
		<THead>
			<Tr>
				<Th>Rank</Th>
				<Th>Player</Th>
				<Th>Rating</Th>
			</Tr>
		</THead>
		<Tbody>
			{
				items.map(({rank, username, rating}) => (
					<Tr className={'leaderboard-row'} key={rank}>
						<Td>{rank}</Td>
						<Td>
							<Link onClick={() => onPlayerClick(username)} color={'primary'}>
								{username}
							</Link>

						</Td>
						<Td>{rating}</Td>
					</Tr>
				))
			}
		</Tbody>
	</Table>
}

export default LeaderboardTablePure;