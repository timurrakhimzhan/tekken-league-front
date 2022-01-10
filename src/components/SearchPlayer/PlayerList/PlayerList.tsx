import {useSearchPlayers} from "../../../hooks/query-hooks/use-search-players";
import useAuth from "../../../hooks/use-auth";
import React, {useState} from "react";
import Spinner from "../../../shared/Spinner";
import {PlayerCardWrapperStyled, PlayerListWrapperStyled} from "../styled";
import PlayerCard from "../../../shared/PlayerCard";
import Divider from "../../../shared/Divider";
import CreateChallengeModal from "../../../shared/CreateChallengeModal";
import {useHistory} from "react-router-dom";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const PlayerList = () => {
	const {data, isFetching} = useSearchPlayers();
	const {username} = useAuth();
	const {handleProfileOpen} = useNavigationHandlers();
	const [opponentToChallenge, setOpponentToChallenge] = useState<string | null>(null);

	return <>
		{
			!data || isFetching ? <Spinner className={'marginLeftAuto marginRightAuto'} color={'primary'} size={'md'} />
				:
				<PlayerListWrapperStyled>
					{
						data.items.map((item) => <PlayerCardWrapperStyled key={item.username}>
							<PlayerCard {...item} isMine={username === item.username}
													onClick={() => handleProfileOpen(item.username)}
													onChallenge={(event) => {
														event.stopPropagation();
														setOpponentToChallenge(item.username)
													}} />
							<Divider />
						</PlayerCardWrapperStyled >)
					}
				</PlayerListWrapperStyled>
		}
		<CreateChallengeModal opponent={opponentToChallenge}
													onClose={() => setOpponentToChallenge(null)} open={Boolean(opponentToChallenge)} />
	</>
}

export default PlayerList;