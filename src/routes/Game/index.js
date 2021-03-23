import s from './style.module.css';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import { FireBaseContext } from '../../context/firebaseContext';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const GamePage = () => {
    const firebase = useContext(FireBaseContext);
    console.log('####: firebase', firebase)

    const history = useHistory();
    const returnHome = () => {
        history.push('/home');
    }

    const [pokemons, setPokemons] = useState({});

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce();
        setPokemons(response);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    // console.log(pokemons)

    const setActive = (key) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const pokemon_key = item[0];
                if (pokemon_key === key) {
                    pokemon.active = true;
                    firebase.postPokemon(key, pokemon);
                    // database.ref('pokemons/'+ pokemon_key).set(pokemon);
                };
                acc[item[0]] = pokemon;
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
        getPokemons();
    }

    const addNew = () => {
        const index = getRandomInt(0,5);
        const new_pokemons = Object.entries(pokemons).slice();
        const selected_pokemon = {...new_pokemons[index][1], active: false};
        firebase.addPokemon(selected_pokemon, async () => {
            await getPokemons();
        });
    }

    return (
        <div>
            <button onClick={returnHome}>
                Return to home
            </button>
            <button onClick={resetState}>
                Reset state
            </button>
            <button onClick={addNew}>
                Add new pokemon
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
                            db_key={key}
                            onClickItem={setActive}/>)
                    }
                </div>}
            </Layout>
        </div>
    );
};

export default GamePage