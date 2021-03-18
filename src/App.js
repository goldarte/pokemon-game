import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css'
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

const App = () => {
    const matchRoot = useRouteMatch('/');
    const matchHome = useRouteMatch('/home');
    const match = matchRoot.isExact || matchHome;
    return (
        <Switch>
            <Route path='/404' render={() => (
                <h1>404 not found</h1>
            )} />
            <Route>
                <>
                <MenuHeader bgActive={!match}/>
                <div className={cn(s.wrap, {[s.isHomePage]: match})}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/game" component={GamePage} />
                        <Route path="/about" render={() => (
                            <h1>This is page about</h1>
                        )} />
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