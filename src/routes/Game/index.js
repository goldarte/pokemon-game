import s from './style.module.css';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase'

const GamePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
        setPokemons()
    }, []);

    // const pokemons_default = POKEMONS.map((item) => {
    //     return { ...item, active: false }
    // });

    console.log(pokemons)

    const setActive = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                    database.ref('pokemons/'+ item[0]).set({
                        ...pokemon
                    });
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    }

    return (
        <div>
            <button onClick={handleClick}>
                    Return to home
            </button>
            <Layout title="Cards" id="cards" colorBg="202736">
                { pokemons && <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {name, img, type, id, values, active}]) => <PokemonCard 
                            key={key}
                            name={name}
                            img={img}
                            type={type}
                            id={id}
                            values={values}
                            active={active}
                            onClickItem={setActive}/>)
                    }
                </div>}
            </Layout>
        </div>
    );
};

export default GamePage