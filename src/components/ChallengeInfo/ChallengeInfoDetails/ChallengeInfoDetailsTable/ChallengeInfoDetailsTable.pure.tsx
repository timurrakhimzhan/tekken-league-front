import {Table, Tbody, Td, Tr} from "../../../../shared/Table";
import ChallengeStatusCell from "../../../../shared/ChallengeStatusCell";
import React from "react";
import {ChallengeInfoDetailsTablePureProps} from "./ChallengeInfoDetailsTable.pure.props";
import Link from "../../../../shared/Link";

const ChallengeInfoDetailsTablePure: React.FC<ChallengeInfoDetailsTablePureProps> = ({challengeInfo, username, onPlayerClick, onMatchClick}) => {
	const isChallenger = challengeInfo.challengerUsername === username;
	return <Table className={'marginBottomXLg'}>
		<Tbody>
			<Tr>
				<Td width={'65%'}>
					Challenge Id:
				</Td>
				<Td>
					{challengeInfo.id}
				</Td>
			</Tr>
			<Tr>
				<Td>
					{isChallenger ? "You challenged" : "You were challenged by"}:
				</Td>
				<Td>
					<Link onClick={() => onPlayerClick(isChallenger ? challengeInfo.challengedUsername : challengeInfo.challengerUsername)}>
						{isChallenger ? challengeInfo.challengedUsername : challengeInfo.challengerUsername}
					</Link>
				</Td>
			</Tr>
			<Tr>
				<Td>
					First to (FT):
				</Td>
				<Td>
					{challengeInfo.firstTo}
				</Td>
			</Tr>
			<Tr>
				<Td>
					Status:
				</Td>
				<Td>
					<ChallengeStatusCell status={challengeInfo.status} />
				</Td>
			</Tr>
			<Tr>
				<Td>
					Challenge comment:
				</Td>
				<Td width={'60%'}>
					{challengeInfo.challengeComment || "Comment was not provided"}
				</Td>
			</Tr>
			{
				challengeInfo.status !== "PENDING" && challengeInfo.statusChangedAt !== null &&
					<>
							<Tr>
									<Td>
										{isChallenger ? "Your opponent " : "You "}
										changed status on:
									</Td>
                  <Td>
										{new Date(challengeInfo.statusChangedAt).toLocaleString()}
                  </Td>
							</Tr>
              <Tr>
                  <Td>
										{isChallenger ? "Your opponent's " : "Your "}
                      answer comment:
                  </Td>
                  <Td>
										{challengeInfo.answerComment || "No answer was given"}
                  </Td>
              </Tr>
					</>
			}
			{
				challengeInfo.matchId !== null && (
					<Tr>
						<Td>
							Match id:
						</Td>
						<Td>
							<Link onClick={() => onMatchClick(challengeInfo.matchId as number)}>
								{challengeInfo.matchId}
							</Link>
						</Td>
					</Tr>
				)
			}
		</Tbody>
	</Table>
}

export default ChallengeInfoDetailsTablePure;