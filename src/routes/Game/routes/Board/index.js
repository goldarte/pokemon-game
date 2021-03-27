import s from './style.module.css';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import PlayerBoard from './component/PlayerBoard';
import { PokemonContext } from '../../../../context/pokemonContext';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
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
        setPlayer2(player2Request.data);
    }, []);

    const handleClickBoardPlate = (position) => {
        console.log('#### position', position);
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    cards={Object.values(pokemons)}
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
                                item.card && <PokemonCard {...item} minimize/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    cards={player2}
                    onClickCard={(card)=>setChoiseCard(card)}
                />
            </div>
        </div>
    );
};

export default BoardPage;
