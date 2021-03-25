import { useRouteMatch, Route, Switch } from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import {PokemonContext} from '../../context/pokemonContext';

class SelectedPokemons {
    constructor () {
        this.pokemons = new Map();
    }

    addPokemon = (key, pokemon) => {
        this.pokemons.set(key, pokemon);
    }

    removePokemon = (key) => {
        this.pokemons.delete(key);
    }
}

const GamePage = () => {
    const match = useRouteMatch();
    return (
        <PokemonContext.Provider value = {new SelectedPokemons()}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;