import s from './style.module.css';
import { useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.entries(pokemons).map(([key, {name, img, type, id, values, active}]) => <PokemonCard
                        key={key}
                        className={s.card}
                        name={name}
                        img={img}
                        type={type}
                        id={id}
                        values={values}
                        active={true}
                        minimize/>)
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
