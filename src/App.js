import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css'

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import database from './service/firebase';

database.ref('pokemons').once('value', (snapshot) => {
    console.log('####: snapshot', snapshot.val());
});

const App = () => {
    const matchRoot = useRouteMatch('/');
    const matchHome = useRouteMatch('/home');
    const matchAbout = useRouteMatch('/about');
    const matchContact = useRouteMatch('/contact');
    const match = matchRoot.isExact || matchHome || matchAbout || matchContact;
    return (
        <Switch>
            <Route path='/404' component={NotFoundPage} />
            <Route>
                <>
                <MenuHeader bgActive={!match}/>
                <div className={cn(s.wrap, {[s.isHomePage]: match})}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/game" component={GamePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route render={() => (
                            <Redirect to='/404'/>
                        )} />
                    </Switch>
                </div>
                <Footer />
                </>
            </Route>
        </Switch>
    )

  // const [page, setPage] = useState('app');

  // const handleChangePage = (page) => {
  //   console.log('####: MAIN');
  //   setPage(page);
  // }

  // switch(page) {
  //   case 'home':
  //     return <HomePage onChangePage={handleChangePage}/>
  //   case 'game':
  //     return <GamePage onChangePage={handleChangePage}/>
  //   default:
  //     return <HomePage onChangePage={handleChangePage}/>
  // }
};

export default App;