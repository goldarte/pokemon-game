import { useState } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';
import cn from 'classnames';
import s from './style.module.css';

const PlayerBoard = ( {player, cards, onClickCard} ) => {
    const [selected, setSelected] = useState(null);
    return (
        <div>
            {
                cards.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [s.selected] : selected === item.id
                    })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard( {player, ...item});
                        }}
                    >
                        <PokemonCard
                            key={item.id}
                            className={s.cardBoard}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            id={item.id}
                            values={item.values}
                            active
                            minimize
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerBoard;