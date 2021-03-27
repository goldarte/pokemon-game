import { useState } from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';
import cn from 'classnames';
import s from './style.module.css';

const PlayerBoard = ( {cards} ) => {
    const [selected, setSelected] = useState(null);
    return (
        <div>
            {
                cards.map(({name, img, type, id, values}) => (
                    <div className={cn(s.cardBoard, {
                        [s.selected] : selected === id
                    })}
                        onClick={() => setSelected(id)}
                    >
                        <PokemonCard
                            key={id}
                            className={s.cardBoard}
                            name={name}
                            img={img}
                            type={type}
                            id={id}
                            values={values}
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