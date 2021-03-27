import s from './style.module.css';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import PlayerBoard from './component/PlayerBoard';
import { PokemonContext } from '../../../../context/pokemonContext';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiseCard, setChoiseCard] = useState(null);

    console.log('#### board', board);
    console.log('#### Player 2', player2);
    console.log('#### choise card', choiseCard);


    const history = useHistory();

    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }

    useEffect( async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red',
            }))
        });
    }, []);

    const handleClickBoardPlate = async (position) => {
        console.log('#### position', position);
        if (choiseCard) {
            const params = {
                position,
                card: choiseCard,
                board,
            };
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();
            console.log('#### request', request);
            setBoard(request.data);
        }
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card)=>setChoiseCard(card)}
                />
            </div>
            <div className={s.board}>
                {
                    board.map(item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} className={s.card} minimize active/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card)=>setChoiseCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;
