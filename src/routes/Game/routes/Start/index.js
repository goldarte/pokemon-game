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
    // console.log('#### firebase: ', firebase)

    const history = useHistory();
    const returnHome = () => {
        history.push('/home');
    }
    const startGame = () => {
        history.push('/game/board');
    }

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })

        setPokemons(prevState => (Object.entries(prevState).reduce(([key, pokemon]) => ({
            key: {...pokemon, selected: false}
        }), {})));

        return () => firebase.offPokemonSocket();
    }, []);

    // console.log('####pokemons: ', pokemons);

    const setSelected = (key) => {
        if (Object.keys(selected_pokemons.pokemons).length < 5 || pokemons[key].selected) {
            selected_pokemons.onSelectedPokemons(key, {...pokemons[key]});
            setPokemons(prevState => ({
                ...prevState,
                [key]: {...prevState[key], selected: !prevState[key].selected}
            }));
        }
    }

    // const resetState = () => {
    //     const resetStateArr = Object.entries(pokemons).slice(0,5);
    //     const pokemons_data = resetStateArr.reduce((acc, item) => {
    //         const pokemon = {...item[1], active: false};
    //         acc[item[0]] = pokemon;
    //         return acc;
    //     }, {});
    //     firebase.setPokemons(pokemons_data);
    // }

    // const addNew = () => {
    //     const index = getRandomInt(0,5);
    //     const new_pokemons = Object.entries(pokemons).slice();
    //     const selected_pokemon = {...new_pokemons[index][1], active: false};
    //     firebase.addPokemon(selected_pokemon);
    // }

    return (
        <>
        <div className={s.buttonWrap}>
            <button onClick={returnHome}>
                Return to home
            </button>
            <button
                onClick={startGame}
                disabled={Object.keys(selected_pokemons.pokemons).length<5}
            >
                Start Game
            </button>
        </div>
        <Layout title="Select 5 cards" id="cards" colorBg="202736">
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, type, id, values, selected}]) => <PokemonCard
                        className={s.card}
                        key={key}
                        name={name}
                        img={img}
                        type={type}
                        id={id}
                        values={values}
                        active={true}
                        selected={selected}
                        db_key={key}
                        onClickItem={() => setSelected(key)}/>)
                }
            </div>
        </Layout>
        </>
    );
};

export default StartPage;
