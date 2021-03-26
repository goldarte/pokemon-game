import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css'

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import {FireBaseContext} from "./context/firebaseContext";
import Firebase from './service/firebase';

const App = () => {
    const location_path = useLocation().pathname
    const matchRoot = location_path === '/';
    const matchHome = location_path ==='/home';
    const matchAbout = location_path ==='/about';
    const matchContact = location_path ==='/contact';
    const matchBoardPage = location_path ==='/game/board';
    const match = matchRoot || matchHome || matchAbout || matchContact || matchBoardPage;
    return (
        <FireBaseContext.Provider value={new Firebase()}>
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
        </FireBaseContext.Provider>
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