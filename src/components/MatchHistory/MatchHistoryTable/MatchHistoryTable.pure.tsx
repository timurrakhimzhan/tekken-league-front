import React from "react";
import {Table, Tbody, Td, Th, THead, Tr} from "../../../shared/Table";
import Typography from "../../../shared/Typography";
import {MatchHistoryTablePureProps} from "./MatchHistoryTable.pure.props";
import MatchStatusCell from "../../../shared/MatchStatusCell";
import {AiOutlineArrowRight} from "react-icons/all";
import IconWrapper from "../../../shared/IconWrapper";
import {MATCH_HISTORY_HIDE_COLUMNS} from "../../../constants";
import Link from "../../../shared/Link";

const MatchHistoryTablePure: React.FC<MatchHistoryTablePureProps> = ({items, onPlayerClick, onMatchClick, username, columnsToHide}) => {

    return <Table>
        <THead>
            <Tr>
                <Th>#</Th>
                <Th>Player #1</Th>
                {!columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.SCORE) && <Th>Score</Th>}
                <Th>Player #2</Th>
                {!columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.CATEGORY) && <Th>Category</Th>}
                {!columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.FIRST_TO) && <Th>First To (FT)</Th>}
                <Th>Status</Th>
                {!columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.DELTA) && <Th>Delta</Th>}
                <Th align={'center'}>Actions</Th>
            </Tr>
        </THead>
        <Tbody>
            {
                items.length === 0 && (
                  <Tr>
                      <Td colSpan={9} align={"center"} fontFamily={'thin'}>
                          No match was played yet
                      </Td>
                  </Tr>
                )
            }
            {
                items.map((match) => {
                    const delta = username === match.p1.username ? match.p1.delta : match.p2.delta;
                    return <Tr key={match.id}>
                        <Td>
                            {match.id}
                        </Td>
                        <Td>
                            <Link onClick={() => onPlayerClick(match.p1.username)}>
                                {match.p1.username}
                            </Link>

                        </Td>
                        {
                            !columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.SCORE) && (
                              <Td>
                                  {match.p1.score ?? "?"} - {match.p2.score ?? "?"}
                              </Td>
                            )
                        }
                        <Td>
                            <Link onClick={() => onPlayerClick(match.p2.username)}>
                                {match.p2.username}
                            </Link>
                        </Td>
                        {
                            !columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.CATEGORY) && (
                              <Td>
                                  {match.category ? <Typography weight={'bold'} color={match.category === "WIN" ? 'success' : 'error'}>
                                      {match.category}
                                  </Typography> : "?"}
                              </Td>
                            )
                        }
                        {
                            !columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.FIRST_TO) && (
                              <Td>
                                  {match.firstTo}
                              </Td>
                            )

                        }
                        <Td>
                            <MatchStatusCell status={match.status} />
                        </Td>
                        {
                            !columnsToHide.includes(MATCH_HISTORY_HIDE_COLUMNS.DELTA) && (
                              <Td>
                                  {match.status === "FINISHED" && delta !== null ? (
                                    <Typography color={delta > 0 ? 'success' : 'error' }>
                                        {delta > 0 && '+'}{delta}
                                    </Typography>
                                  ) : "0"}
                              </Td>
                            )
                        }
                        <Td align={'center'}>
                            <IconWrapper onClick={() => onMatchClick(match.id)}>
                                <AiOutlineArrowRight />
                            </IconWrapper>
                        </Td>
                    </Tr>
                  }
                )
            }
        </Tbody>
    </Table>
}

export default MatchHistoryTablePure;