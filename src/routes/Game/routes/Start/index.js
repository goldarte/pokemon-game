import s from './style.module.css';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const selected_pokemons = useContext(PokemonContext);
    console.log('#### selected pokemons:', selected_pokemons);
    console.log('#### firebase: ', firebase)

    const history = useHistory();
    const returnHome = () => {
        history.push('/home');
    }

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.offPokemonSocket();
    }, []);

    console.log('####pokemons: ', pokemons);

    const setActive = (key, selected) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const pokemon_key = item[0];
                if (pokemon_key === key) {
                    pokemon.active = true;
                    selected ? selected_pokemons.addPokemon(key, pokemon) : selected_pokemons.removePokemon(key);
                    // database.ref('pokemons/'+ pokemon_key).set(pokemon);
                };
                acc[item[0]] = pokemon;
                firebase.postPokemon(key, pokemon);
                return acc;
            }, {});
        });
    }

    const resetState = () => {
        const resetStateArr = Object.entries(pokemons).slice(0,5);
        const pokemons_data = resetStateArr.reduce((acc, item) => {
            const pokemon = {...item[1], active: false};
            acc[item[0]] = pokemon;
            return acc;
        }, {});
        firebase.setPokemons(pokemons_data);
    }

    const addNew = () => {
        const index = getRandomInt(0,5);
        const new_pokemons = Object.entries(pokemons).slice();
        const selected_pokemon = {...new_pokemons[index][1], active: false};
        firebase.addPokemon(selected_pokemon);
    }

    return (
        <>
        <div className={s.buttonWrap}>
            <button onClick={returnHome}>
                Return to home
            </button>
            <button onClick={resetState}>
                Reset state
            </button>
            <button onClick={addNew}>
                Add new pokemon
            </button>
        </div>
        <Layout title="Select 5 cards" id="cards" colorBg="202736">
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, type, id, values, active}]) => <PokemonCard
                        className={s.card}
                        key={key}
                        name={name}
                        img={img}
                        type={type}
                        id={id}
                        values={values}
                        active={true}
                        db_key={key}
                        onClickItem={setActive}/>)
                }
            </div>
        </Layout>
        </>
        
    );
};

export default StartPage;
